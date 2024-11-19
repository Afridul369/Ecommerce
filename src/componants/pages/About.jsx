import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Text from '../Text'
import { MdOutlineChevronRight } from 'react-icons/md'
import Product from '../Products'
import Cat from '../../assets/cat.png'
import Image from '../Image'
import Button from '../Button'

const About = () => {
  return (
    <>
    <div className="py-20">
        <Container>
            <Text as='h1' text={'About'} className='text-hoverheadeingC text-[49px] font-sans font-bold'/>
            <div className="mt-2 mb-20">
            <Flex className={'items-center'}>
            <Text as='h1' text={'Home'} className='text-headingC text-[12px] font-sans '/>
            <MdOutlineChevronRight className='text-headingC text-[12px] font-sans'/>
            <Text as='h1' text={'About'} className='text-headingC text-[12px] font-sans '/>
            </Flex>
            </div>
            <div className="">
                <Flex className={'gap-x-8'}>
                    <div className="">
                    <Image imgSrc={Cat} className={'w-full'}/>
                    <Button text='Our Brands'/>
                    </div>

                    <Image imgSrc={Cat} className={'w-full'}/>
                </Flex>
            </div>
        </Container>
    </div>
    </>
  )
}

export default About