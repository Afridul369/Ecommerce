import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Products from './Products'

const ShopProduct = ({title,price,image,tag}) => {
  return (
    <>
    <div className="mb-10">
     <Container>
        <Flex>
        <Products imgSrc={image}
    text1={title}
    text2={price} text3={tag} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'} text7={'Black'}
    />
        </Flex>
     </Container>

    </div>
    </>
  )
}

export default ShopProduct