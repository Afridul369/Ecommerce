
import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import promoOne from '../assets/promo_one.png'
import promoTwo from '../assets/promo_two.png'
import promoThree from '../assets/promo_three.png'

const Promo = () => {
  return (
   <>
   <div className="my-[100px]">
    <Container>
      <Flex className={'justify-between'}>
        <div className="w-[49%]">
            <Image imgSrc={promoOne}/>
        </div>
        <div className="w-[49%]">
            <Image imgSrc={promoTwo} className={'mb-10'}/>
            <Image imgSrc={promoThree}/>
        </div>
      </Flex>
    </Container>

   </div>
   </>
  )
}

export default Promo