import React from 'react'
import HeaderPart from './Layouts/HeaderPart'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <>
    <HeaderPart/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout