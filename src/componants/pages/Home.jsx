import React from "react";
import Navbar from "../Navbar";
import Category from "../Category";
import Banner from "../Banner";
import Promo from "../Promo";
import Product from "../Product";
import Product02 from "../Product02";
import Ads from "../Ads";
import Product03 from "../Product03";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Category />
      <Banner/>
      <Promo/>
     <Product />

     {/* <Ads/>
     <Product03/>
     <Footer/> */}
    </>
  );
};

export default Home;
