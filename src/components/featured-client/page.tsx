import React from 'react'
import './featured-client.scss'
import { StaticImageData } from 'next/image'
import { FC } from 'react'
import Image  from 'next/image'

interface clientProps{
  icon: string | StaticImageData,
  text:string,
  width?:number,
  height?:number,
}

const FeaturedClient:FC<clientProps> = ({icon,text,...props}) => {
  return (
    <div className='featured-client'>
      <Image className='featured-client--client-logo' width={props.width} height={props.height} src={icon} alt='client-logo'></Image>
      <span className='featured-client--client-company-name'>{text}</span>
    </div>
  )
}

export default FeaturedClient;