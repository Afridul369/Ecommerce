import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Cat from '../assets/cat.png'

const Product = () => {
  return (
   <>
   <div className="">
    <Container>
       <Flex className={'justify-between'}>
    <div className="w-[24%]">
        <Image imgSrc={Cat}/>
    </div>
    <div className="w-[24%]">
        <Image imgSrc={Cat}/>
    </div>
    <div className="w-[24%]">
        <Image imgSrc={Cat}/>
    </div>
    <div className="w-[24%]">
        <Image imgSrc={Cat}/>
    </div>
       </Flex>
    </Container>
   </div>
   </>
  )
}

export default Product