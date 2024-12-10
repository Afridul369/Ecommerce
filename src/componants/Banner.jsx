import React from 'react'
import Image from './Image'
import bannerimg from '../assets/bannerbg.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const Banner = () => {
  var settings  = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows:false,
    autoplay: true,
    speed: 1000,
  };
  return (
    <>
    <Slider {...settings}>
      <Image imgSrc={bannerimg} className={'bg-no-repeat bg-center bg-cover w-full'}/>
      <Image imgSrc={bannerimg} className={'bg-no-repeat bg-center bg-cover w-full'}/>
      <Image imgSrc={bannerimg} className={'bg-no-repeat bg-center bg-cover w-full'}/>
    </Slider>
     
    </>
  )
}

export default Banner