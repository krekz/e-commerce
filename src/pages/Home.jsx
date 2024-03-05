import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Footer from "../components/Footer";
import Form from "../components/Home/Form";
import ProductList from "../components/Home/ProductList";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setSearchInput(value);
  };

  return (
    <>
      <Navbar />

      <div className="container flex flex-col flex-wrap items-center justify-center text-center py-14">
        <Hero />
        <Form onChange={handleInputChange} value={searchInput} />
        <ProductList searchInput={searchInput} />
      </div>

      <Footer />
    </>
  );
};

export default Home;
