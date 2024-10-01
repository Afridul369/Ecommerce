import React from 'react'
import Container from './Container'
import Image from './Image'
import Flex from './Flex'
import Menu from './Menu'
import Logo from '../assets/logo.png'


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
                <Menu menuname={'Home'}/>
                <Menu menuname={'Shop'}/>
                <Menu menuname={'About'}/>
                <Menu menuname={'Contacts'}/>
                <Menu menuname={'Journal'}/>
            </Flex>
        </div>
    </Flex>
   </Container> 
   </div>

   
   </>
  )
}

export default Navbar