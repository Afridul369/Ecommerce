import React from 'react'
import Text from './Text'

const AboutInfo = ({title,para,className}) => {
  return (
    <>
    <div className={`${className}`}>
        <Text as={'p'} text={title} className='text-[25px] font-bold font-dm text-hoverheadeingC mb-6'/>
        <Text as={'p'} text={para} className='text-base font-dm text-headingC'/>

    </div>
    </>
  )
}

export default AboutInfo