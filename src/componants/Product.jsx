import React from 'react'
import Badge from './Badge'
import Price from './Price'
import Products from '../componants/Products'
import Cat from '../assets/cat.png'
import Watch from '../assets/watch.png'
import Clock from '../assets/clock.png'
import Basket from '../assets/basket.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Container from './Container'

const Product = () => {

  var settings = {
       
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
 
  return (
    <>
 <Container>
 <Slider {...settings}>
    <Products imgSrc={Clock}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'10%'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    <Products imgSrc={Watch}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    <Products imgSrc={Basket}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    <Products imgSrc={Cat}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    </Slider>
 </Container>
    </>
  )
}

export default Product