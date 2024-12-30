import React, { useEffect, useState } from 'react'
import Container from './Container'
import Text from './Text'
import Flex from './Flex'
import Products from './Products'
import Cap from '../assets/cap.png'
import Rating from './Rating'
import { FaAngleRight, FaCaretDown } from 'react-icons/fa'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useSelector } from 'react-redux'


const ProductCart = () => {

  let data = useSelector(state=>(state.breadCrumb.previousValue))

  return (
    <>
    <Container>
        <div className="py-20">
            <Text as='h1' text={'Product'} className='text-hoverheadeingC text-[40px] font-sans font-bold mb-2'/>
            <div className="mt-2 mb-20">
                <Flex className={'items-center'}>
                  <Text as='h1' text={`${data}`} className='text-headingC text-[12px] font-sans '/>
                  <FaAngleRight className='text-headingC text-[12px] font-sans'/>
                  <Text as='h1' text={'ProductDetails'} className='text-headingC text-[12px] font-sans '/>
                </Flex>
            </div>
            <div className=" justify-center flex mb-10">
                <Products imgSrc={Cap}  text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}/>
            </div>
            <div className="px-64">
              <Text as='h1' text={'Product'} className='text-hoverheadeingC text-[40px] font-sans font-bold mb-4'/>
              <Flex className={'items-center gap-x-3 mb-6'}>
                  <Rating/>
                  <Flex className={'items-center gap-x-1'}>
                    <Text as='p' text={'1'} className='text-headingC text-sm font-sans'/>
                    <Text as='p' text={'Review'} className='text-headingC text-sm font-sans'/>
                  </Flex>
              </Flex>
              <div className="border-b border-Border2 mb-6">
                <Text as={'p'} text={'$ 20.00'} className={'text-hoverheadeingC text-xl font-sans font-bold mb-4'}/>
              </div>
              <div className="border-b border-Border2">
                <Flex className={'items-center gap-x-10 mb-10'}>
                    <Text as='h1' text={'Color:'} className='text-hoverheadeingC text-base font-sans font-bold '/>
                    <Flex className={'items-center gap-x-2'}>
                        <div className="w-5 h-5 bg-details1 rounded-full hover:scale-125 duration-300"></div>
                        <div className="w-5 h-5 bg-details2 rounded-full hover:scale-125 duration-300"></div>
                        <div className="w-5 h-5 bg-details3 rounded-full hover:scale-125 duration-300"></div>
                        <div className="w-5 h-5 bg-details4 rounded-full hover:scale-125 duration-300"></div>
                        <div className="w-5 h-5 bg-details5 rounded-full hover:scale-125 duration-300"></div>
                    </Flex>
                </Flex>
                <Flex className={' gap-x-20 mb-6'}>
                  <Text as={'p'} text={'SIZE:'} className={'text-hoverheadeingC text-base font-sans font-bold mb-6'}/>
                  <div className="">
                      <div className="w-32 h-8 py-1 px-7 border " >
                          <Flex className={'items-center justify-between'}>
                              <Text as={'p'} text={'S'} className={'text-hoverheadeingC text-base font-sans '}/>
                              <FaCaretDown className='text-xl'/>
                          </Flex>
                      </div>
                      <div className="w-32 h-8 py-1 px-7 border hidden" >
                              <Text as={'p'} text={'S'} className={'text-hoverheadeingC text-base font-sans '}/>           
                      </div>
                      <div className="w-32 h-8 py-1 px-7 border hidden" >
                              <Text as={'p'} text={'M'} className={'text-hoverheadeingC text-base font-sans '}/>       
                      </div>
                      <div className="w-32 h-8 py-1 px-7 border hidden" >
                              <Text as={'p'} text={'L'} className={'text-hoverheadeingC text-base font-sans '}/>      
                      </div>
                      <div className="w-32 h-8 py-1 px-7 border hidden" >
                              <Text as={'p'} text={'XL'} className={'text-hoverheadeingC text-base font-sans '}/>    
                      </div>
                  </div>
                </Flex>
                <Flex className={' gap-x-8 mb-8'}>
                  <Text as={'p'} text={'QUANTITY:'} className={'text-hoverheadeingC text-base font-sans font-bold '}/>
                  <div className="py-2 px-4 border border-border ">
                        <Flex className={'items-center gap-x-9'}>
                          <FiMinus className='text-base font-dm '/>
                          <Text as='h1' text={'1'} className='text-base font-dm'/>
                          <FiPlus className='text-base font-dm '/>
                      </Flex>
                  </div>
                </Flex>
              </div>
              <div className="py-5 border-b mb-6" >
                <Flex className={'gap-x-8'}>
                    <Text as={'p'} text={'STATUS:'} className={'text-hoverheadeingC text-base font-sans font-bold '}/>
                    <Text as={'p'} text={'In stock'} className={'text-headingC text-base font-sans  '}/>   
                </Flex>
              </div>
              <div className="border-b mb-6">
                  <Flex className={'gap-x-6 mb-6'}>
                      <div className="py-3 px-10 border border-black group hover:bg-hoverheadeingC  duration-500">
                          <Text as={'p'} text={'Add to Wish List'} className={'text-hoverheadeingC text-sm font-sans font-bold group-hover:text-white '}/>                         
                      </div>
                      <div className="py-3 px-10 border border-black group hover:bg-hoverheadeingC  duration-500 " >
                          <Text as={'p'} text={'Add to Cart'} className={'text-hoverheadeingC text-sm font-sans font-bold group-hover:text-white '}/>                         
                      </div>
                     
                  </Flex>
              </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default ProductCart