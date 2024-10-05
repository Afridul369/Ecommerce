import React from "react";
import Navbar from "../Navbar";
import Category from "../Category";
import Banner from "../Banner";
import Promo from "../Promo";

const Home = () => {
  return (
    <>
      <Navbar />
      <Category />
      <Banner/>
      <Promo/>
    </>
  );
};

export default Home;
