import React from 'react'

const Button = ({className,text}) => {
  return (
    <div className={`bg-black text-white ${className}`}>{text}</div>
  )
}

export default Button