import React from 'react'
import Badge from './Badge'
import Price from './Price'
import Products from '../componants/Products'
import Cat from '../assets/cat.png'
import Watch from '../assets/watch.png'
import Clock from '../assets/clock.png'
import Basket from '../assets/basket.png'
import Bag1 from '../assets/bag1.png'
import Bag2 from '../assets/bag2.png'
import Puta from '../assets/puta.png'
import Jar from '../assets/jar.png'
import Cap from '../assets/cap.png'
import Table from '../assets/table.png'
import Headphone from '../assets/headphone.png'
import Sunglass from '../assets/sunglass.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Container from './Container'
import PrevArrow from './PrevArrow'
import NextArrow from './NextArrow'
import Text from './Text'
import Flex from './Flex'

const Product = () => {

  var settings = {
       
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };
 
  return (
    <>
 <div className="mb-40">
 <Container>
  <Text text={'New Arrivals'} as='p' className='text-hoverheadeingC text-[39px] font-bold font-dm mb-10'/>
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
 </div>
 
 <div className="mb-28">
 <Container>
 <Flex >
    <Products imgSrc={Jar}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    <Products imgSrc={Bag1}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    <Products imgSrc={Puta}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    <Products imgSrc={Bag2}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    </Flex>
 </Container>
 </div>
 
 <div className="mb-28">
 <Container>
 <Flex >
    <Products imgSrc={Cap}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    <Products imgSrc={Table}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    <Products imgSrc={Headphone}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    <Products imgSrc={Sunglass}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    </Flex>
 </Container>
 </div>
    </>
  )
}

export default Product