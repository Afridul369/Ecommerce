import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Text from './Text'
import { FaHeart } from "react-icons/fa";
import { FaArrowsRotate, } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Badge from './Badge'
import Price from './Price'

const Product = ({imgSrc,imgAlt,text1,text2,text3,text4,text5,text6,text7}) => {

  return (
   <>
   <Container>
      <div className="w-full  ">
      <div>
      <div className="relative  group px-3 overflow-y-hidden">
    <Image imgSrc={imgSrc} imgAlt={imgAlt} className={''}/>
    <Badge text={text3}  className={'top-5 left-8 absolute'}/>
    <div className=" py-6 px-6 bg-[#F5F5F5]/75 w-[370px] ml-3 duration-500 absolute bottom-[-156px] left-0  group-hover:bottom-0">
    <Flex className={'items-center justify-end gap-x-3 mb-4'}> 
            <Text text={text4} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-300 '/>
            <FaHeart />
        </Flex>
        <Flex className={'items-center justify-end gap-x-3 mb-4 '}> 
            <Text text={text5} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-300 '/>
            <FaArrowsRotate/>
        </Flex>
        <Flex className={'items-center justify-end gap-x-3'}> 
            <Text text={text6} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-300 '/>
            <FaShoppingCart />
        </Flex>
    </div>
    </div>
      </div>
    <div className=" px-4 pt-3 pb-5 ">
    <Flex className={'justify-between items-center mb-2'}>
        <Text text={text1} as='p' className='text-hoverheadeingC font-bold text-xl font-dm'/>
        <Price textt={text2} className=' text-base font-dm text-headingC'/>
    </Flex>
    <Text text={text7} as='p' className='text-headingC  text-base font-dm'/>
    </div> 
      </div>
   </Container>
   </>
  )
}

export default Product