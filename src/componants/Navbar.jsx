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
                <NavLink to='/' className={({ isActive }) =>`${isActive ? "font-bold text-black " : ""}`}>
                    <Menu menuname={'Home'}/>
                </NavLink>
                <NavLink to='/shop'  className={({ isActive }) =>`${isActive ? "font-bold text-black" : ""}`}>
                    <Menu menuname={'Shop'}/>
                </NavLink>
                <NavLink to='/about' className={({ isActive }) =>`${isActive ? "font-bold text-black " : ""}`}>
                    <Menu menuname={'About'}/>
                </NavLink>
                <NavLink to='/contacts' className={({ isActive }) =>`${isActive ? "font-bold text-black " : ""}`}>
                    <Menu menuname={'Contacts'}/>
                </NavLink>
                <NavLink to='/productcart' className={({ isActive }) =>`${isActive ? "font-bold text-black " : ""}`}>
                    <Menu menuname={'Journal'}/>
                </NavLink> 
            </Flex>
        </div>
    </Flex>
   </Container> 
   </div>


   </>
  )
}

export default Navbar