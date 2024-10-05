import React from 'react'
import Image from './Image'
import bannerimg from '../assets/bannerbg.png'

const Banner = () => {
  return (
    <>
     <Image imgSrc={bannerimg} className={'bg-no-repeat bg-center bg-cover w-full'}/>
     
    </>
  )
}

export default Banner