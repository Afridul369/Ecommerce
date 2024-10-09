import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Text from './Text'
import Jar from '../assets/jar.png'
import Bag1 from '../assets/bag1.png'
import Puta from '../assets/puta.png'
import Bag2 from '../assets/bag2.png'
import { FaHeart } from "react-icons/fa";
import { FaArrowsRotate, } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Badge from './Badge'

const Product02 = () => {
  return (
    <>
    <div className="mb-36">
    <Container>
        <Text text={"New Bestseller"} as={'h1'} className='font-bold text-[39px] font-dm mb-10'/>
       <Flex className={'justify-between '}>
    <div className="w-[24%] relative group">      
        <Image imgSrc={Jar} className={'w-full relative'}/>
        <div className="py-6 px-6 bg-white w-full absolute bottom-20 left-0 invisible group-hover:visible"> 
       <div className="">
       <Flex className={'items-center justify-end gap-x-3 mb-4'}> 
            <Text text={'Add to Wish List'} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-500 '/>
            <FaHeart />
        </Flex>
        <Flex className={'items-center justify-end gap-x-3 mb-4 '}> 
            <Text text={'Compare'} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-500 '/>
            <FaArrowsRotate/>
        </Flex>
        <Flex className={'items-center justify-end gap-x-3'}> 
            <Text text={'Add to Cart'} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-300 '/>
            <FaShoppingCart />
        </Flex>
       </div>      
        </div>
        <Badge className={'absolute top-4 left-4'} text={'New'}/>
        <Flex className={'justify-between px-3 pb-5 pt-3 '}>
            <Text text={"Basic Crew Neck Tee"} as={'p'} className='text-hoverheadeingC font-bold text-xl font-dm'/>
            <Text text={"$44.00"} as={'p'} className=' text-base font-dm text-headingC'/>
        </Flex>
        <Text text={"Black"} as={'p'} className='text-base font-dm text-headingC px-3'/>
    </div>
    <div className="w-[24%] relative group">      
        <Image imgSrc={Bag1} className={'w-full relative'}/>
        <div className="py-6 px-6 bg-white w-full absolute bottom-20 left-0 invisible group-hover:visible"> 
       <div className="">
       <Flex className={'items-center justify-end gap-x-3 mb-4'}> 
            <Text text={'Add to Wish List'} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-500 '/>
            <FaHeart />
        </Flex>
        <Flex className={'items-center justify-end gap-x-3 mb-4 '}> 
            <Text text={'Compare'} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-500 '/>
            <FaArrowsRotate/>
        </Flex>
        <Flex className={'items-center justify-end gap-x-3'}> 
            <Text text={'Add to Cart'} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-300 '/>
            <FaShoppingCart />
        </Flex>
       </div>      
        </div>
        <Badge className={'absolute top-4 left-4'} text={'New'}/>
        <Flex className={'justify-between px-3 pb-5 pt-3  '}>
            <Text text={"Basic Crew Neck Tee"} as={'p'} className='text-hoverheadeingC font-bold text-xl font-dm'/>
            <Text text={"$44.00"} as={'p'} className=' text-base font-dm text-headingC'/>
        </Flex>
        <Text text={"Black"} as={'p'} className='text-base font-dm text-headingC px-3'/>
    </div>
    <div className="w-[24%] relative group">      
        <Image imgSrc={Puta} className={'w-full relative'}/>
        <div className="py-6 px-6 bg-white w-full absolute bottom-20 left-0 invisible group-hover:visible"> 
       <div className="">
       <Flex className={'items-center justify-end gap-x-3 mb-4'}> 
            <Text text={'Add to Wish List'} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-500 '/>
            <FaHeart />
        </Flex>
        <Flex className={'items-center justify-end gap-x-3 mb-4 '}> 
            <Text text={'Compare'} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-500 '/>
            <FaArrowsRotate/>
        </Flex>
        <Flex className={'items-center justify-end gap-x-3'}> 
            <Text text={'Add to Cart'} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-300 '/>
            <FaShoppingCart />
        </Flex>
       </div>      
        </div>
        <Badge className={'absolute top-4 left-4'} text={'New'}/>
        <Flex className={'justify-between px-3 pb-5 pt-3  '}>
            <Text text={"Basic Crew Neck Tee"} as={'p'} className='text-hoverheadeingC font-bold text-xl font-dm'/>
            <Text text={"$44.00"} as={'p'} className=' text-base font-dm text-headingC'/>
        </Flex>
        <Text text={"Black"} as={'p'} className='text-base font-dm text-headingC px-3'/>
    </div>
    <div className="w-[24%] relative group">      
        <Image imgSrc={Bag2} className={'w-full relative'}/>
        <div className="py-6 px-6 bg-white w-full absolute bottom-20 left-0 invisible group-hover:visible"> 
       <div className="">
       <Flex className={'items-center justify-end gap-x-3 mb-4'}> 
            <Text text={'Add to Wish List'} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-500 '/>
            <FaHeart />
        </Flex>
        <Flex className={'items-center justify-end gap-x-3 mb-4 '}> 
            <Text text={'Compare'} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-500 '/>
            <FaArrowsRotate/>
        </Flex>
        <Flex className={'items-center justify-end gap-x-3'}> 
            <Text text={'Add to Cart'} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-300 '/>
            <FaShoppingCart />
        </Flex>
       </div>      
        </div>
        <Badge className={'absolute top-4 left-4'} text={'New'}/>
        <Flex className={'justify-between px-3 pb-5 pt-3  '}>
            <Text text={"Basic Crew Neck Tee"} as={'p'} className='text-hoverheadeingC font-bold text-xl font-dm'/>
            <Text text={"$44.00"} as={'p'} className=' text-base font-dm text-headingC'/>
        </Flex>
        <Text text={"Black"} as={'p'} className='text-base font-dm text-headingC px-3'/>
    </div>
       </Flex>
    </Container>
   </div>
    </>
  )
}

export default Product02