import Footer from "../components/footer";
import Header from "../components/header";
import Home from "../containers/home";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="m-10">
        <Home />
      </div>
      <Footer />
    </>
  );
}
