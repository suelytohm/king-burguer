import React from 'react'
import './Button.css'

export const Button = ({ children }) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  )
}
