import React from 'react'
import Container from './Container'
import Text from './Text'
import Flex from './Flex'
import { MdOutlineChevronRight } from 'react-icons/md'

const AccountInfo = () => {
  return (
    <>
    <div className="py-32">
      <Container>
        <Text as='h1' text={'My Account'} className='text-[49px] text-hoverheadeingC font-bold font-dm mb-4'/>
        <div className="mt-2 mb-32">
            <Flex className={'items-center'}>
            <Text as='h1' text={'Home'} className='text-headingC text-[12px] font-sans '/>
            <MdOutlineChevronRight className='text-headingC text-[12px] font-sans'/>
            <Text as='h1' text={'My account '} className='text-headingC text-[12px] font-sans '/>
            </Flex>
        </div>
        <Flex className="gap-x-40">        
                <div className="">
                <div className="border-b ">
                    <Text as='h1' text='Dashboard' className='text-base font-dm text-headingC mb-6 hover:text-hoverheadeingC hover:font-bold duration-500'/>
                </div>            
                <div className="border-b mt-6">
                    <Text as='h1' text='Others' className='text-base font-dm text-headingC mb-6 hover:text-hoverheadeingC hover:font-bold duration-500'/>
                </div>            
                <div className="border-b mt-6">
                    <Text as='h1' text='Downloads' className='text-base font-dm text-headingC mb-6 hover:text-hoverheadeingC hover:font-bold duration-500'/>
                </div>            
                <div className="border-b mt-6">
                    <Text as='h1' text='Addresses' className='text-base font-dm text-headingC mb-6 hover:text-hoverheadeingC hover:font-bold duration-500'/>
                </div>            
                <div className="border-b mt-6">
                    <Text as='h1' text='Account Details' className='text-base font-dm text-headingC mb-6 hover:text-hoverheadeingC hover:font-bold duration-500'/>
                </div>            
                <div className="border-b mt-6">
                    <Text as='h1' text='Logout' className='text-base font-dm text-headingC mb-6 hover:text-hoverheadeingC hover:font-bold duration-500'/>
                </div>    
                </div> 
                <div className="">
                  <Text as='p' text={'Hello admin (not admin? Log out)'} className="text-headingC font-dm text-base mb-10"/>    
                  <Text as='p' text={'From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.'} className="text-headingC font-dm text-base"/>    
                </div>           
        </Flex>
      </Container>
   </div>
    </>
  )
}

export default AccountInfo