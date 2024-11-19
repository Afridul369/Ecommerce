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
    <Flex>
        <div className="w-[10%]">
            <Link to='/'><Image imgSrc={Logo} className={'w-28'}/></Link>
        </div>
        <div className="w-[90%]">
            <Flex className={'justify-center gap-x-7'}> 
                <Link to='/' className={({isActive}) => isActive ? 'text-hoverheadeingC' : 'text-headingC'}>
                <Menu menuname={'Home'}/>
                </Link>
                <NavLink to='/shop'  className={({isActive}) => isActive ? 'text-hoverheadeingC' : 'text-headingC'}>
                <Menu menuname={'Shop'}/>
                </NavLink>
                <Link to='/about'  className={({isActive}) => isActive ? 'text-hoverheadeingC' : 'text-headingC'}>
                <Menu menuname={'About'}/>
                </Link>
                <Link to='/contacts'  className={({isActive}) => isActive ? 'text-hoverheadeingC' : 'text-headingC'}>
                <Menu menuname={'Contacts'}/>
                </Link>
                <Link to='/journal'  className={({isActive}) => isActive ? 'text-hoverheadeingC' : 'text-headingC'}>
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