import React from 'react'
import Image from './Image'
import Badge from './Badge'
import Flex from './Flex'
import Text from './Text'
import Price from './Price'
import { FaArrowsRotate, FaHeart } from 'react-icons/fa6'
import { FaShoppingCart } from 'react-icons/fa'

const ProductCard = ({imgSrc,imgAlt,text3,text1,text2,text4,text5,text6}) => {
  return (
    <>
    <div className="relative w-[25%] group">
    <Image imgSrc={imgSrc} imgAlt={imgAlt} className={'w-full'}/>
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
    </>
  )
}

export default ProductCard