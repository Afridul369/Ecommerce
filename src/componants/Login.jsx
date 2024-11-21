import React from 'react'
import Container from './Container'
import Text from './Text'
import Flex from './Flex'
import Button from './Button'
import { MdOutlineChevronRight } from 'react-icons/md'


const Login = () => {
  return (
    <>
    <div className="py-32">
        <Container>
            <Text as='h1' text={'Login'} className='text-[49px] text-hoverheadeingC font-bold font-dm mb-2'/>
            <div className="mt-2 mb-32">
            <Flex className={'items-center'}>
            <Text as='h1' text={'Home'} className='text-headingC text-[12px] font-sans '/>
            <MdOutlineChevronRight className='text-headingC text-[12px] font-sans'/>
            <Text as='h1' text={'Sign Up'} className='text-headingC text-[12px] font-sans '/>
            </Flex>
            </div>
            <div className="mb-16 border-b ">
            <Text as='h1' text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"} className='text-base mb-1 text-footercolor font-dm '/>
            <Text as='h1' text={"Ipsum has been the industry's standard dummy text ever since the."} className='text-base text-footercolor font-dm mb-16'/>
            </div>
            <Text as='h1' text={'Returning Customer'} className='text-[39px] font-bold font-dm text-hoverheadeingC mb-12'/>
            <div className="mb-11 ">
              <Flex className={'gap-x-20'}>
                <div className="border-b border-border">
                  <Text as='p' text='Email Address' className='text-base text-hoverheadeingC font-bold font-dm mb-2'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="email" placeholder='company@domain.com' className='text-sm text-headingC font-dm mb-4'/>
                </div>
                <div className="border-b border-border">
                  <Text as='p' text='Email Address' className='text-base text-hoverheadeingC font-bold font-dm mb-2'/>
                  {/* <Text as='p' text='..........' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type='password' placeholder='.......' className='text-base text-headingC font-dm mb-4'/>
                </div>
              </Flex>
            </div>
            <div className="mb-16 border-b border-border">
            <Button text='Log In' className={'w-[200px] text-center py-4 text-sm font-dm font-bold bg-white text-black hover:text-white hover:bg-black duration-500 border border-black mb-16'}/>
            </div>
            <Text as='h1' text={'New Customer'} className='text-[39px] font-bold font-dm text-hoverheadeingC mb-12'/>
            <Text as='h1' text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"} className='text-base text-headingC font-dm mb-1'/>
            <Text as='h1' text={"Ipsum has been the industry's standard dummy text ever since the."} className='text-base text-headingC font-dm mb-16'/>
            <Button text='Continue' className={'w-[200px] text-center text-white  bg-hoverheadeingC text-sm font-bold font-dm py-4'}/>
        </Container>
    </div>
    </>
  )
}

export default Login