import React from 'react'
import Container from './Container'
import Image from './Image'
import Flex from './Flex'
import Menu from './Menu'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
   <>
   <div className=" py-7">
   <Container>
    <Flex>
        <div className="w-[10%]">
            <Image imgSrc={Logo} imgAlt={'logo'}/>
        </div>
        <div className="w-[90%]">
            <Flex className={'justify-center gap-x-7'}> 
                <Link to='/'>
                <Menu menuname={'Home'}/>
                </Link>
                <Link to='/shop'>
                <Menu menuname={'Shop'}/>
                </Link>
                <Link to='/about'>
                <Menu menuname={'About'}/>
                </Link>
                <Link to='/contacts'>
                <Menu menuname={'Contacts'}/>
                </Link>
                <Link to='/journal'>
                <Menu menuname={'Journal'}/>
                </Link>
                
               
            </Flex>
        </div>
    </Flex>
   </Container> 
   </div>


   </>
  )
}

export default Navbar