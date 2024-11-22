import React from 'react'
import Container from './Container'
import Text from './Text'
import Flex from './Flex'
import { MdOutlineChevronRight } from 'react-icons/md'

const Checkout = () => {
  return (
    <>
    <div className="py-32">
       <Container>
        <Text as='h1' text={'Checkout'} className='text-[49px] text-hoverheadeingC font-bold font-dm mb-4'/>
        <div className="mt-2 mb-32">
            <Flex className={'items-center'}>
            <Text as='h1' text={'Home'} className='text-headingC text-[12px] font-sans '/>
            <MdOutlineChevronRight className='text-headingC text-[12px] font-sans'/>
            <Text as='h1' text={'Checkout'} className='text-headingC text-[12px] font-sans '/>
            </Flex>
            </div>
            <Text as='h1' text={'Have a coupon? Click here to enter your code'} className='text-base text-footercolor font-dm mb-32'/>
            <div className="mb-32">
            <Text as='h1' text={'Billing Details'} className='text-[39px] font-bold font-dm text-hoverheadeingC  mb-12'/>
            <Flex className={'gap-x-40 mb-6'}>
            <div className="border-b">
                  <Text as='p' text='First Name *' className='text-base text-hoverheadeingC font-bold font-dm mb-3'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="text" placeholder='First Name' className='text-sm text-headingC font-dm mb-4'/>
            </div>
            <div className="border-b">
                  <Text as='p' text='Last Name *' className='text-base text-hoverheadeingC font-bold font-dm mb-3'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="text" placeholder='Last Name' className='text-sm text-headingC font-dm mb-4'/>
            </div>
            </Flex>
            <div className="border-b mb-6">
                  <Text as='p' text='Companye Name (optional)' className='text-base text-hoverheadeingC font-bold font-dm mb-3'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="text" placeholder='Company Name' className='text-sm text-headingC font-dm mb-4'/>
            </div>
            <div className="border-b mb-6">
                  <Text as='p' text='Country *' className='text-base text-hoverheadeingC font-bold font-dm mb-3'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="text" onSelect={'Please select'} placeholder='Please select' className='text-sm text-headingC font-dm mb-4'/>
            </div>
            <div className="border-b mb-4">
                  <Text as='p' text='Street Address *' className='text-base text-hoverheadeingC font-bold font-dm mb-3'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="text" placeholder='House number and street name' className='text-sm text-headingC font-dm mb-4'/>                  
            </div>
            <div className="border-b mb-4">
            <input type="text" placeholder='Apartment, suite, unit etc. (optional)' className='text-sm text-headingC font-dm mb-4'/>                  
            </div>
            <div className="border-b mb-4">
                  <Text as='p' text='Town/City *' className='text-base text-hoverheadeingC font-bold font-dm mb-3'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="text" placeholder='Town/City' className='text-sm text-headingC font-dm mb-4'/>                  
            </div>
            <div className="border-b mb-4">
                  <Text as='p' text='County (optional)' className='text-base text-hoverheadeingC font-bold font-dm mb-3'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="text" placeholder='County' className='text-sm text-headingC font-dm mb-4'/>                  
            </div>
            <div className="border-b mb-4">
                  <Text as='p' text='Post Code *' className='text-base text-hoverheadeingC font-bold font-dm mb-3'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="text" maxLength={5} minLength={4} placeholder='Post Code' className='text-sm text-headingC font-dm mb-4'/>                  
            </div>
            <div className="border-b mb-4">
                  <Text as='p' text='Phone *' className='text-base text-hoverheadeingC font-bold font-dm mb-3'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="text" maxLength={11} placeholder='Phone' className='text-sm text-headingC font-dm mb-4'/>                  
            </div>
            <div className="border-b mb-4">
                  <Text as='p' text='Email Address *' className='text-base text-hoverheadeingC font-bold font-dm mb-3'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="email" placeholder='Email' className='text-sm text-headingC font-dm mb-4'/>                  
            </div>
            </div>
            <div className="border-b">
                <Text as='h1' text={"Additional Information"} className='text-[39px]  text-hoverheadeingC font-bold mb-14 font-dm '/>
                <Text as='p' text={"Other Notes (optional)"} className='text-base text-hoverheadeingC font-bold font-dm mb-3'/>
                <Text as='p' text={"Notes about your order, e.g. special notes for delivery."} className='text-sm text-footercolor font-dm mb-20'/>
            </div>
            <div className="mt-32">
            <Text as='h1' text={"Your Order"} className='text-[39px]  text-hoverheadeingC font-bold mb-14 font-dm '/>
            <div className="mb-16">
            <Flex>
                <div className="border border-border p-4 w-[315px]">
                    <Text as='p' text={"Product"} className='text-base text-hoverheadeingC font-bold font-dm '/>                   
                </div>
                <div className="border border-border p-4 w-[315px]">
                <Text as='p' text={"Total"} className='text-base text-headingC  font-dm '/>              
                </div>
            </Flex>
            <Flex>
                <div className="border border-border p-4 w-[315px]">
                    <Text as='p' text={"Product name x 1"} className='text-base text-hoverheadeingC font-bold font-dm '/>                   
                </div>
                <div className="border border-border p-4 w-[315px]">
                <Text as='p' text={"389.99 $"} className='text-base text-headingC  font-dm '/>              
                </div>
            </Flex>
            <Flex>
                <div className="border border-border p-4 w-[315px]">
                    <Text as='p' text={"Subtotal"} className='text-base text-hoverheadeingC font-bold font-dm '/>                   
                </div>
                <div className="border border-border p-4 w-[315px]">
                <Text as='p' text={"389.99 $"} className='text-base text-headingC  font-dm '/>              
                </div>
            </Flex>
            <Flex>
                <div className="border border-border p-4 w-[315px]">
                    <Text as='p' text={"Total"} className='text-base text-hoverheadeingC font-bold font-dm '/>                   
                </div>
                <div className="border border-border p-4 w-[315px]">
                <Text as='p' text={"389.99 $"} className='text-base text-headingC  font-dm '/>              
                </div>
            </Flex>
            </div>
            </div>
       </Container>
    </div>
    </>
  )
}

export default Checkout