import React from 'react'
import Flex from './Flex'
import { FaStar } from 'react-icons/fa'

const Rating = () => {
  return (
    <>
    <div className="">
        <Flex className={'items-center gap-x-1'}>
            <FaStar className='text-RatingBG'/>
            <FaStar className='text-RatingBG'/>
            <FaStar className='text-RatingBG'/>
            <FaStar className='text-RatingBG'/>
            <FaStar className='text-RatingBG'/>
        </Flex>
    </div>
    </>
  )
}

export default Rating