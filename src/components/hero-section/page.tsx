import './hero-section.scss'
import Button from "../buttons/page"
import { FiPlayCircle } from "react-icons/fi";
import Image from 'next/image';
import dashboardPic from '/Users/Legion/demo-website/public/dashboard.png'
import Navbar from '../navbar/page';

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-section--grid"></div>
      <div className='hero-section--navbar'>
        <Navbar/>
      </div>
    <div className='hero-section--content'>
      <div className="hero-section--content--header">
        <h1 className='hero-section--content--header--heading'>Beautiful analytics to grow smarter</h1>
        <div className='hero-section--content--header--sub-heading'>
        <span className='hero-section--content--header--sub-heading--span'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</span>
        </div>
      </div>
      <div className="hero-section--content--button">
        <Button icon={<FiPlayCircle/>} text='Demo' size="medium" variant="secondary"></Button>
        <Button text='Sign up' size="medium" variant="primary"></Button>
      </div>
      <div className="hero-section--content--display-image">
        <Image width={721.47} height={387.79} alt="display-image" src={dashboardPic}/>
      </div>
      </div>
    </div>
  )
}
