import React from 'react'
import Navbar from '../Navbar'
import Category from '../Category'
import Container from '../Container'
import Product from '../Product'
import Flex from '../Flex'
import Pagination from '../Pagination'
import AllProducts from '../AllProducts'
import Footer from '../Footer'

const Shop = () => {
  return (
    <>
    <Navbar />
    <Category />
    <AllProducts/>
    <Footer/>
    </>
  )
}

export default Shop