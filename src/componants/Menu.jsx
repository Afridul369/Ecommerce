import React from 'react'

const Menu = ({menuname,className}) => {
  return (
    <ul>
        <li className={`font-dm text-sm text-headingC hover:text-hoverheadeingC hover:font-bold duration-300 ${className}`}>{menuname}</li>
    </ul>
  )
}

export default Menu