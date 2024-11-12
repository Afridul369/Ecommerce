import React from 'react'
import { HiArrowLongLeft } from 'react-icons/hi2';

const PrevArrow = (props) => {
  
    const { className,  onClick } = props;
  return (
    <div
      className={`${className} text-2xl text-white bg-arrorbg inline-block rounded-full p-3 absolute z-10 top-40  left-4 `}  
      onClick={onClick}
    > <HiArrowLongLeft /> </div>
  );
}
  


export default PrevArrow