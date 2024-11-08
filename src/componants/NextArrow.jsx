import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2';

const NextArrow = (props) => {
    const { className,  onClick } = props;
  
  return (
    <div
      className={`${className} text-2xl text-white bg-arrorbg inline-block rounded-full p-3 absolute z-10 top-40  right-5`}
      onClick={onClick}
    > <HiArrowLongRight /></div>
  );
}
  

export default NextArrow