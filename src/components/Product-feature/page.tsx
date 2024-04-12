import React from "react"
import {FC} from 'react';
import Image from "next/image";
import { StaticImageData } from 'next/image';
import './product-features.scss'
import ListItem from "../list-items/page";

interface ProductFeaturesprop{
    icon?:string;
    heading?:string;
    subText?: string;
    url?:string | StaticImageData;
}

const ProductFeatures:FC<ProductFeaturesprop> = ({icon,...props}) => {
  return (
    <div className="product-features">
        <div className="product-features--info">
          <div className="product-features--info--header">
            {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#EBF1FF"/>
            <path d="M18.0944 23.2288C18.0322 22.8282 18 22.4179 18 22C18 17.5817 21.6052 14 26.0526 14C30.4999 14 34.1052 17.5817 34.1052 22C34.1052 22.9981 33.9213 23.9535 33.5852 24.8345C33.5154 25.0175 33.4804 25.109 33.4646 25.1804C33.4489 25.2512 33.4428 25.301 33.4411 25.3735C33.4394 25.4466 33.4493 25.5272 33.4692 25.6883L33.8717 28.9585C33.9153 29.3125 33.9371 29.4895 33.8782 29.6182C33.8266 29.731 33.735 29.8205 33.6211 29.8695C33.4911 29.9254 33.3146 29.8995 32.9617 29.8478L29.7765 29.3809C29.6101 29.3565 29.527 29.3443 29.4512 29.3448C29.3763 29.3452 29.3245 29.3507 29.2511 29.3661C29.177 29.3817 29.0823 29.4172 28.893 29.4881C28.0097 29.819 27.0524 30 26.0526 30C25.6344 30 25.2237 29.9683 24.8227 29.9073M19.6316 34C22.5965 34 25 31.5376 25 28.5C25 25.4624 22.5965 23 19.6316 23C16.6667 23 14.2632 25.4624 14.2632 28.5C14.2632 29.1106 14.3603 29.6979 14.5395 30.2467C14.6153 30.4787 14.6532 30.5947 14.6657 30.6739C14.6786 30.7567 14.6809 30.8031 14.6761 30.8867C14.6714 30.9668 14.6514 31.0573 14.6113 31.2383L14 34L16.9948 33.591C17.1583 33.5687 17.24 33.5575 17.3114 33.558C17.3865 33.5585 17.4264 33.5626 17.5001 33.5773C17.5701 33.5912 17.6742 33.6279 17.8823 33.7014C18.4306 33.8949 19.0191 34 19.6316 34Z" stroke="#4174E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> */}
            <span className="product-features--info--header--main-heading">
              {props.heading}
            </span>
            <span className="product-features--info--header--sub-heading">
              {props.subText}
            </span>
          </div>
          <div className="product-features--info--feature-list">
              <ListItem text=''/>
              <ListItem text=''/>
              <ListItem text=''/>
          </div>
        </div>
        <div className="product-features--image">
          {props.url && 
          <Image className='product-features--image--url' src={props.url} alt="dashboard" width='50' height='40'></Image>
          }
        </div>
    </div>
  )
}

export default ProductFeatures