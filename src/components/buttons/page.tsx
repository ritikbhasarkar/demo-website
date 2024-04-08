"use client"

import { FC } from 'react';
import './button.css';


type ButtonProp = {
  text:string;
  variant?: 'primary' | 'secondary';
  size?:'small'|'medium';
  onClick?:()=> void;
}

const Button: FC<ButtonProp> = ({size,variant ,...props}) =>{
  
  const buttonClasses=[
    'button',
    `button--${size}`,
    `button--${variant}`,
  ].join(' ')

  console.log(buttonClasses)

  // const handleClick=()=>{
  //  props.onClick && props.onClick()
  // }
  
  return (
    <button className={buttonClasses}>{props.text}</button>
  )
}


 export default Button;