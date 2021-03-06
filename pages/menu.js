import React, { useEffect, useState } from "react";

import axios from "axios";

import Footer from "../components/footer";
import Header from "../components/header";
import ProductCard from "../components/productCard";

const MenuPage = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    // const postsAPI = "http://127.0.0.1:8000/api/";
    // const categoryAPI = "http://127.0.0.1:8000/api/category/";
    setIsLoading(true);
    const postsAPI = "https://earp-api.herokuapp.com/api/";
    const categoryAPI = "https://earp-api.herokuapp.com/api/category/";

    const getPosts = axios.get(postsAPI);
    const getCategory = axios.get(categoryAPI);
    axios.all([getPosts, getCategory]).then(
      axios.spread((...allData) => {
        const allDataPosts = allData[0].data;
        const allCategory = allData[1].data;

        console.log(allDataPosts);
        console.log(allCategory);

        setPosts(allDataPosts);
        setCategory(allCategory);
        setIsLoading(false);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/")
  //     .then((res) => {
  //       console.log(res);
  //       setPosts(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // });
  return (
    <div>
      <Header />
      {!isLoading && posts.length > 0 && (
        <div className="m-10 flex flex-row">
          {posts.map((post, key) => (
            <ProductCard
              key={key}
              id={post.id}
              title={post.title}
              image={post.product_image[0].image}
              regular_price={post.regular_price}
              description={post.description}
              slug={post.slug}
              category={post.category}
            />
          ))}
        </div>
      )}
      {isLoading && <p className="font-base flex items-center justify-center">Loading...</p>}
      <Footer />
    </div>
  );
};

export default MenuPage;
