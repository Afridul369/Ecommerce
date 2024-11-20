import React from 'react'
import Container from './Container'
import Text from './Text'
import Flex from './Flex'
import Button from './Button'

const Login = () => {
  return (
    <>
    <div className="py-32">
        <Container>
            <Text as='h1' text={'Login'} className='text-[49px] text-hoverheadeingC font-bold font-dm mb-4'/>
            <div className="mb-32 border-b ">
            <Text as='h1' text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"} className='text-xs text-footercolor font-dm '/>
            <Text as='h1' text={"Ipsum has been the industry's standard dummy text ever since the."} className='text-xs text-footercolor font-dm mb-16'/>
            </div>
            <Text as='h1' text={'Returning Customer'} className='text-[39px] font-bold font-dm text-hoverheadeingC mb-12'/>
            <div className="mb-11 ">
              <Flex className={'gap-x-12'}>
                <div className="border-b">
                  <Text as='p' text='Email Address' className='text-base text-hoverheadeingC font-bold font-dm mb-4'/>
                  {/* <Text as='p' text='company@domain.com' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type="email" placeholder='company@domain.com' className='text-sm text-headingC font-dm mb-4'/>
                </div>
                <div className="border-b">
                  <Text as='p' text='Email Address' className='text-base text-hoverheadeingC font-bold font-dm mb-4'/>
                  {/* <Text as='p' text='..........' className='text-sm text-headingC font-dm mb-4'/> */}
                  <input type='password' placeholder='.......' className='text-sm text-headingC font-dm mb-4'/>
                </div>
              </Flex>
            </div>
            <div className="mb-32 border-b border-black">
            <Button text='Log In' className={'w-[200px] text-center py-4 text-sm font-dm font-bold text-hoverheadeingC border border-black mb-16'}/>
            </div>
            <Text as='h1' text={'New Customer'} className='text-[39px] font-bold font-dm text-hoverheadeingC mb-12'/>
            <Text as='h1' text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"} className='text-xs text-footercolor font-dm '/>
            <Text as='h1' text={"Ipsum has been the industry's standard dummy text ever since the."} className='text-xs text-footercolor font-dm mb-16'/>
            <Button text='Continue' className={'w-[200px] text-center text-white  bg-hoverheadeingC text-sm font-bold font-dm py-4'}/>
        </Container>
    </div>
    </>
  )
}

export default Login