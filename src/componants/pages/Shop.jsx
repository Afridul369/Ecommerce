import React from 'react'
import Navbar from '../Navbar'
import Category from '../Category'
import Container from '../Container'
import Product from '../Product'
import Flex from '../Flex'
import Pagination from '../Pagination'

const Shop = () => {
  return (
    <>
    <Navbar />
    <Category />
    <Container className={'py-[200px]'}>
      <Flex >
        <div className="w-3/12"></div>
        <div className="w-9/12">
        <Pagination itemsPerPage={4} />,
        </div>
      </Flex>
    </Container>
    </>
  )
}

export default Shop