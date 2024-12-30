import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Text from '../Text'
import Product from '../Products'
import Cat from '../../assets/cat.png'
import Image from '../Image'
import Image1 from '../../assets/aboutimg1.png'
import Image2 from '../../assets/aboutimg2.png'
import Button from '../Button'
import Button2 from '../Button2'
import AboutInfo from '../AboutInfo'
import { useSelector } from 'react-redux'
import { FaAngleRight } from 'react-icons/fa'

const About = () => {
  
  let data = useSelector(state=>(state.breadCrumb.previousValue))
  return (
    <>
    <div className="py-20">
        <Container>
            <Text as='h1' text={'About'} className='text-hoverheadeingC text-[49px] font-sans font-bold'/>
            <div className="mt-2 mb-20">
              <Flex className={'items-center'}>
                <Text as='h1' text={`${data}`} className='text-headingC text-[12px] font-sans '/>
                <FaAngleRight className='text-headingC text-[14px] font-sans'/>
                <Text as='h1' text={'About'} className='text-headingC text-[12px] font-sans '/>
              </Flex>
            </div>
            <div className="mb-32">
                <Flex className={'gap-x-8'}>
                    <div className="relative">
                        <Image imgSrc={Image2} imgAlt={'Image1'}/>
                        <Button2 text='Our Brands' className={'absolute bottom-16 left-1/2 -translate-x-1/2 py-5'}/>
                    </div>
                    <div className="relative">
                        <Image imgSrc={Image1} imgAlt={'Image1'}/>
                        <Button2 text='Our Brands' className={'absolute bottom-16 left-1/2 -translate-x-1/2 py-5'}/>
                    </div>
                </Flex>
            </div>
            <Text as={'p'} text='Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.' className='text-[39px] font-dm text-hoverheadeingC mb-32'/>
            <Flex className={'items-center justify-between gap-x-2'}>
                <AboutInfo title={'Our Vision'} para={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."} className={''}/>
                <AboutInfo title={'Our Story'} para={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."} className={'mx-5'}/>
                <AboutInfo title={'Our Brands'} para={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}/>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default About