import React from "react";
import Navbar from "../Navbar";
import Category from "../Category";
import Banner from "../Banner";
import Promo from "../Promo";
import Product from "../Product";

const Home = () => {
  return (
    <>
      <Navbar />
      <Category />
      <Banner/>
      <Promo/>
     <Product/>
    </>
  );
};

export default Home;
