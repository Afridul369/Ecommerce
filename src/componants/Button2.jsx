import React from 'react'

const Button2 = ({className,text}) => {
  return (
    <>
    <div className={`w-[200px] text-center text-sm font-dm font-bold py-3 bg-white hover:bg-hoverheadeingC duration-500 text-hoverheadeingC hover:text-white border border-black ${className}`}>{text}</div>
    </>
  )
}

export default Button2