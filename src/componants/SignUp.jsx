import React from 'react'
import Container from './Container'
import Text from './Text'
import Flex from './Flex'
import { MdOutlineChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Button from './Button'

const SignUp = () => {
  return (
    <>
    <div className="py-32">
        <Container>
            <Text as='h1' text={'Sign Up'} className='text-[49px] text-hoverheadeingC font-bold font-dm mb-4'/>
            <div className="mt-2 mb-32">
            <Flex className={'items-center'}>
            <Text as='h1' text={'Home'} className='text-headingC text-[12px] font-sans '/>
            <MdOutlineChevronRight className='text-headingC text-[12px] font-sans'/>
            <Text as='h1' text={'Sign Up'} className='text-headingC text-[12px] font-sans '/>
            </Flex>
            </div>
            <div className="mb-32 border-b ">
            <Text as='h1' text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"} className='text-xs text-footercolor font-dm '/>
            <Text as='h1' text={"Ipsum has been the industry's standard dummy text ever since the."} className='text-xs text-footercolor font-dm mb-16'/>
            </div>

            {/* ====================Personal Part=============== */}
            <Text as='h1' text={'Your Personal Details'} className='text-[39px] font-bold font-dm text-hoverheadeingC mt-16 mb-12'/>
            <div className="mb-16 border-b">
              <Flex className={'gap-x-12'}>
                <div className="border-b">
                  <Text as='p' text='First Name' className='text-base text-hoverheadeingC font-bold font-dm mb-4'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="text" placeholder='First Name' className='text-sm text-headingC font-dm mb-4'/>
                </div>
                <div className="border-b">
                  <Text as='p' text='Last Name' className='text-base text-hoverheadeingC font-bold font-dm mb-4'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type='text' placeholder='Last Name' className='text-sm text-headingC font-dm mb-4'/>
                </div>
              </Flex>
              <Flex className={'gap-x-12'}>
                <div className="border-b">
                  <Text as='p' text='Email Address' className='text-base text-hoverheadeingC font-bold font-dm mb-4'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="email" placeholder='company@domain.com' className='text-sm text-headingC font-dm mb-4'/>
                </div>
                <div className="border-b">
                  <Text as='p' text='Telephone' className='text-base text-hoverheadeingC font-bold font-dm mb-4'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type='number' placeholder='Your Phone Number' className='text-sm text-headingC font-dm mb-4'/>
                </div>
              </Flex>
            </div>
            {/* ====================Personal Part=============== */}

            {/* ============Customer Part============ */}
            <Text as='h1' text={'New Customer'} className='text-[39px] font-bold font-dm text-hoverheadeingC mt-16 mb-14'/>
            <div className="mb-16 border-b">
              <Flex className={'gap-x-12'}>
                <div className="border-b">
                  <Text as='p' text='Address 1' className='text-base text-hoverheadeingC font-bold font-dm mb-4'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="text" placeholder='4279 Zboncak Port Suite 6212' className='text-sm text-headingC font-dm mb-4'/>
                </div>
                <div className="border-b">
                  <Text as='p' text='Address 2' className='text-base text-hoverheadeingC font-bold font-dm mb-4'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type='text' placeholder='—' className='text-sm text-headingC font-dm mb-4'/>
                </div>
              </Flex>
              <Flex className={'gap-x-12'}>
                <div className="border-b">
                  <Text as='p' text='City' className='text-base text-hoverheadeingC font-bold font-dm mb-4'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="text" placeholder='Your City' className='text-sm text-headingC font-dm mb-4'/>
                </div>
                <div className="border-b">
                  <Text as='p' text='Post Code' className='text-base text-hoverheadeingC font-bold font-dm mb-4'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type='number' placeholder='05228' className='text-sm text-headingC font-dm mb-4'/>
                </div>
              </Flex>
              <Flex className={'gap-x-12'}>
                <div className="border-b">
                  <Text as='p' text='Division' className='text-base text-hoverheadeingC font-bold font-dm mb-4'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="text" onSelect={'Please select'} placeholder='Please select' className='text-sm text-headingC font-dm mb-4'/>
                </div>
                <div className="border-b">
                  <Text as='p' text='District' className='text-base text-hoverheadeingC font-bold font-dm mb-4'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type='text' onSelect={'Please select'} placeholder='Your Phone Number' className='text-sm text-headingC font-dm mb-4'/>
                </div>
              </Flex>
            </div>
            {/* =================Customer Part============= */}

            {/* ==================Password Part======== */}
            <Text as='h1' text={'Password'} className='text-[39px] font-bold font-dm text-hoverheadeingC mt-16 mb-14'/>
            <div className="mb-16 border-b">
            <Flex className={'gap-x-12'}>
                <div className="border-b">
                  <Text as='p' text='Password' className='text-base text-hoverheadeingC font-bold font-dm mb-4'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="password" placeholder='Password' className='text-sm text-headingC font-dm mb-4'/>
                </div>
                <div className="border-b">
                  <Text as='p' text='Repeat Password' className='text-base text-hoverheadeingC font-bold font-dm mb-4'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type='password' placeholder='Repeat Password' className='text-sm text-headingC font-dm mb-4'/>
                </div>
              </Flex>
            </div>
            {/* ==================Password Part======== */}
             <div className="mt-16">
                <Flex className={'gap-x-4 mb-5'}>
                    <input type='checkbox'/>
                    <Text as='p' text={'I have read and agree to the Privacy Policy'} className='text-sm text-headingC font-dm mb-4'/>
                </Flex>
                <Flex className={'gap-x-7 mb-5'}>
                    <Text as='p' text={'Subscribe Newsletter'} className='text-sm text-headingC font-dm '/>
                    <div className="flex gap-x-7">
                    <Flex className="gap-x-4">
                      <input type='checkbox'/>
                      <Text as='p' text={'Yes'} className='text-sm text-headingC font-dm '/>
                    </Flex>
                    <Flex className="gap-x-4">
                      <input type='checkbox'/>
                      <Text as='p' text={'No'} className='text-sm text-headingC font-dm '/>
                    </Flex>
                    </div>
                </Flex>
             </div>
             <Link>
             <Button text='Log in' className={'w-[200px] text-center py-5 text-white bg-hoverheadeingC text-sm font-dm font-bold'}/>
             </Link>
        </Container>
    </div>
    </>
  )
}

export default SignUp