import React from 'react'
import Container from './Container'
import Image from './Image'
import Adss from '../assets/Ads01.png'

const Ads = () => {
  return (
    <>
    <div className="mb-28">
    <Container>
        <Image imgSrc={Adss} imgAlt={'Ads'} className={''}/>
    </Container>
    </div>
    </>
  )
}

export default Ads