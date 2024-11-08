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



const Product = ({imgSrc,imgAlt,text1,text2,text3,text4,text5,text6}) => {

    
  return (
   <>
   <Container>

  
      <div>
      <div className="relative w-full group">
    <Image imgSrc={imgSrc} imgAlt={imgAlt} className={''}/>
    <Badge text={text3}  className={'top-5 left-5 absolute'}/>
    <Flex className={'justify-between px-3 pt-3 pb-5'}>
        <Text text={text1} as='p' className='text-hoverheadeingC font-bold text-xl font-dm'/>
        <Price textt={text2} className=' text-base font-dm text-headingC'/>
    </Flex>
    <div className="py-6 px-6 bg-white w-full absolute bottom-14 left-0 invisible group-hover:visible">
    <Flex className={'items-center justify-end gap-x-3 mb-4'}> 
            <Text text={text4} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-200 '/>
            <FaHeart />
        </Flex>
        <Flex className={'items-center justify-end gap-x-3 mb-4 '}> 
            <Text text={text5} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-200 '/>
            <FaArrowsRotate/>
        </Flex>
        <Flex className={'items-center justify-end gap-x-3'}> 
            <Text text={text6} as={'p'} className='text-headingC text-base font-dm hover:font-bold hover:text-hoverheadeingC duration-200 '/>
            <FaShoppingCart />
        </Flex>

    </div>
    </div>
      </div>
     
      
      
     
    
    
    
   </Container>
   </>
  )
}

export default Product