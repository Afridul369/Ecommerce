import React from "react";
import Navbar from "../Navbar";
import Category from "../Category";
import Banner from "../Banner";
import Promo from "../Promo";
import Product from "../Product";
import Product02 from "../Product02";
import Ads from "../Ads";
import Product03 from "../Product03";

const Home = () => {
  return (
    <>
      <Navbar />
      <Category />
      <Banner/>
      <Promo/>
     <Product/>
     <Product02/>
     <Ads/>
     <Product03/>
    </>
  );
};

export default Home;
