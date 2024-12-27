import React from 'react'

function Button({textOnly, className,children,...props}) {
let cSSClass = textOnly? 'text-button':'button'
cSSClass+=' '+ className
  return (
    <button className={cSSClass} {...props}>
      {children}
    </button>
  )
}

export default Button
