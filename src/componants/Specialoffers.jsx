
import React from 'react'
import Container from './Container'
import Text from './Text'
import Flex from './Flex'
import Products from './Products'
import Cap from '../assets/cap.png'
import Table from '../assets/table.png'
import Headphone from '../assets/headphone.png'
import Sunglass from '../assets/sunglass.png'

const Specialoffers = () => {
  return (
    <>
    <div className="mb-28">
 <Container>
 <Text text={'Special Offers'} as='p' className='text-hoverheadeingC text-[39px] font-bold font-dm mb-10'/>
 <Flex >
    <Products imgSrc={Cap}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    <Products imgSrc={Table}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    <Products imgSrc={Headphone}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    <Products imgSrc={Sunglass}
    text1={'Basic Crew Neck Tee'}
    text2={'$44.00'} text3={'New'} text4={'Add to Wish List'} text5={'Compare'} text6={'Add to Cart'}
    />
    </Flex>
 </Container>
 </div>
    </>
  )
}

export default Specialoffers