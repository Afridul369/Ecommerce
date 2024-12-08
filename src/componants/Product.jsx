import React, { useEffect, useState } from "react";
import Products from "../componants/Products";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Container from "./Container";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import Text from "./Text";
import Flex from "./Flex";
import axios from "axios";

const Product = () => {
  let [all, setAll] = useState([]);
  useEffect(() => {
    async function all() {
      let data = await axios.get("https://dummyjson.com/products");
      setAll(data.data.products);
    }
    all();
  }, []);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplayspeed: 1000,
  };

  return (
    <>
      <div className="mb-40">
        <Container>
          <Text
            text={"New Arrivals"}
            as="p"
            className="text-hoverheadeingC text-[39px] font-bold font-dm mb-10"
          />
          <Slider {...settings}>
            {all.map((item) => (
              <div className="w-full ">
                <Products
                  item={item}
                  imgSrc={item.images[0]}
                  text1={item.title}
                  text2={`$ ${item.price}`}
                  text3={`${item.discountPercentage}%`}
                  text4={"Add to Wish List"}
                  text5={"Compare"}
                  text6={"Add to Cart"}
                  text7={item.category}
                />
              </div>
            ))}
          </Slider>
          <Slider {...settings}>
            {all.map((item) => (
              <div className="w-full ">
                <Products
                  item={item}
                  imgSrc={item.images[0]}
                  text1={item.title}
                  text2={`$ ${item.price}`}
                  text3={`${item.discountPercentage}%`}
                  text7={item.category}
                />
              </div>
            ))}
          </Slider>
        </Container>
      </div>

      {/* <div className="mb-28">
 <Container>
 <Flex >
    <Products imgSrc={Jar}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'} text7={'Black'}
    />
    <Products imgSrc={Bag1}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'} text7={'Black'}
    />
    <Products imgSrc={Puta}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'} text7={'Black'}
    />
    <Products imgSrc={Bag2}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'} text7={'Black'}
    />
    </Flex>
 </Container>
 </div> */}
    </>
  );
};

export default Product;
