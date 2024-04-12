

// import Image from 'next/image';
import './featured-client.scss'
import { FC } from 'react'
import SvgIcon from '../svg-icon/page'

interface FeaturedclientProps{
  icon?:string;
  text?:string,
}

const FeaturedClient:FC<FeaturedclientProps> = ({...props}) => {
  return (
    <div className='featured-client'>
      <SvgIcon width={25} height={25} url={props.icon}/>
      <span className='featured-client--client-company-name'>{props.text}</span>
    </div>
  )
}

export default FeaturedClient;