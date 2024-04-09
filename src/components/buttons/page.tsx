"use client"

import { FC, ReactElement } from 'react';
import './button.scss';



type ButtonProp = {
  text:string;
  variant?: 'primary' | 'secondary';
  size?:'small'|'medium';
  icon?:ReactElement ;
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
    <button className={buttonClasses}>{props.icon}{props.text}</button>
  )
}


 export default Button;