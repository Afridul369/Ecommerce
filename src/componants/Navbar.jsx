import React from 'react'
import Container from './Container'
import Image from './Image'
import Flex from './Flex'
import Menu from './Menu'
import Logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
   <>
   <div className=" py-7">
   <Container>
    <Flex className={'justify-between'}>
        <div className="">
            <Link to='/'><Image imgSrc={Logo} className={'w-28'}/></Link>
        </div>
        <div className="">
            <Flex className={'items-center gap-x-7'}> 
                <NavLink to='/'>
                <Menu menuname={'Home'}/>
                </NavLink>
                <NavLink to='/shop' >
                <Menu menuname={'Shop'}/>
                </NavLink>
                <Link to='/about' >
                <Menu menuname={'About'}/>
                </Link>
                <Link to='/my' >
                <Menu menuname={'Contacts'}/>
                </Link>
                <Link to='/productcart' >
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