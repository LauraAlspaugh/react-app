import React from 'react'
interface buttonProps{
    children: string;
    color: string;
    onClick: () => void;
}
const Button = ({children, onClick, color} : buttonProps) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
