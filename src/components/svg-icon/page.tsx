import {FC} from 'react';
import { StaticImageData } from 'next/image';

import './svg-icon.scss'

interface SvgIconProps {
    url?:string | StaticImageData;
    width?:number;
    height?:number;
}


const SvgIcon:FC<SvgIconProps> = ({url,width,height}) => {
  return (
    <div style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
      }} className='svg-icon'>

        <div  style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          mask: `url(${url}) no-repeat center/contain`,
        }} 
        className='svg-icon--mask'>
        </div>
    </div>
  )
}

export default SvgIcon