import Image from 'next/image';
import './logo.scss'
import { FC } from 'react'
import { StaticImageData } from 'next/image';

type kappaxLogoProps={
  icon:string | StaticImageData;
  text?:string;
  width?:number;
  height?:number
}


const Logo:FC<kappaxLogoProps>=({...props})=> {
  return (
    <div className="logo"> 
      <div className='logo--icon'>
       <Image width={props.width} height={props.height} src={props.icon} alt='kappax-icon'/>
      </div>
      {props.text && 
      <h1 className="logo--logo-heading">{props.text}</h1>
      }
    </div>
  )
}

export default Logo;