import React, { useState } from 'react'
import Container from '../Container'
import Text from '../Text'
import Flex from '../Flex'
import Button2 from '../Button2'
import Location from '../../assets/location.png'
import Image from '../Image'
import { FaAngleRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Contacts = () => {
  // let [icon,setIcon]=useState(true)

  let data = useSelector(state=>(state.breadCrumb.previousValue))
  return (
    <>
    <div className="py-32">
        <Container>
            <Text as='h1' text={'Contacts'} className='text-[49px] text-hoverheadeingC font-bold font-dm mb-2'/>
            <div className="mt-2 mb-32">
                <Flex className={'items-center'}>
                  <Link to={data=="Home"?'/':`/${data}`}>
                    <Text as='h1' text={`${data}`} className='text-headingC text-[12px] font-sans '/>
                  </Link>
                  <FaAngleRight className='text-headingC text-sm font-sans'/>
                    {/* {icon?(''):(<FaAngleRight className='text-headingC text-sm font-sans'/>)} */}
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