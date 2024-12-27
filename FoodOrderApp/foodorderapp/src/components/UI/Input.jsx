import React from 'react'

function Input({lable,id,...props}) {
  return (
    <p className='control'>
      <label htmlFor={id}>{lable}</label>
      <input id={id} name={id} required {...props}/>
    </p>
  )
}

export default Input