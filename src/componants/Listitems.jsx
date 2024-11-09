import React from 'react'

const Listitems = ({itemname,className}) => {
  return (
    <div className={`${className}`}>{itemname}</div>
  )
}

export default Listitems