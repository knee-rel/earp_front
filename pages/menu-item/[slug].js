import React, { useState } from "react";
import { useRouter } from "next/router";

import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductDetails from "../../components/productDetails";

const MenuItem = ({ post, categories }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="m-10 flex flex-row">
        <ProductDetails
          product_title={post.title}
          category={categories.name}
          description={post.description}
          regular_price={post.regular_price}
          image={post.product_image[0].image}
        />
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "enchilladas" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://earp-api.herokuapp.com/api/${params.slug}`);
  const post = await res.json();

  const ress = await fetch("https://earp-api.herokuapp.com/api/category/");
  const categories = await ress.json();

  return {
    props: {
      post,
      categories,
    },
  };
}

export default MenuItem;
