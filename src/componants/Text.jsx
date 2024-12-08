import React from 'react'

const Text = (props) => {
  return (

    <props.as className={props.className} onClick={props.onClick}> {props.text}</props.as>
  )
}

export default Text