import React from 'react'
import Container from '../Container'
import Text from '../Text'
import Flex from '../Flex'
import { MdOutlineChevronRight } from 'react-icons/md'
import Button2 from '../Button2'
import Location from '../../assets/location.png'
import Image from '../Image'

const Contacts = () => {
  return (
    <>
    <div className="py-32">
        <Container>
            <Text as='h1' text={'Contacts'} className='text-[49px] text-hoverheadeingC font-bold font-dm mb-2'/>
            <div className="mt-2 mb-32">
                <Flex className={'items-center'}>
                    <Text as='h1' text={'Home'} className='text-headingC text-[12px] font-sans '/>
                    <MdOutlineChevronRight className='text-headingC text-[12px] font-sans'/>
                    <Text as='h1' text={'Contacts'} className='text-headingC text-[12px] font-sans '/>
                </Flex>
            </div>
            <Text as='h1' text={"Fill up a Form"} className='text-[39px]  font-bold text-hoverheadeingC font-dm mb-9'/>
            <div className="border-b mb-5">
              <Text as='p' text='Name' className='text-base text-hoverheadeingC font-bold font-dm '/>
              <input type='text' placeholder='Your name here' className='text-sm py-3 text-headingC font-dm'/>
            </div>
            <div className="border-b mb-5">
              <Text as='p' text='Email' className='text-base text-hoverheadeingC font-bold font-dm '/>
              <input type='email' placeholder='Your email here' className='text-sm py-3 text-headingC font-dm'/>
            </div>
            <div className="border-b mb-5">
              <Text as='p' text='Message' className='text-base text-hoverheadeingC font-bold font-dm '/>
              <input type='text' placeholder='Your message here' className='text-sm pt-3 pb-20 text-headingC font-dm'/>
            </div>
            <Button2 text={'Post'} className={'mb-32 '}/>
            <Image imgSrc={Location} imgAlt={'Location'}/>
        </Container>
    </div>
    </>
  )
}

export default Contacts