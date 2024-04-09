import Logo from "../website-icon/page"
import Button from "../buttons/page"
import './navbar.scss'
import { FaChevronDown } from "react-icons/fa6";
import KappaxLogo from '/Users/Legion/demo-website/public/kappax-logo.png'


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar--nav-section">
        <div className="navbar--nav-section--content">
          <div className="navbar--nav-section--icon">
          <Logo text="Kappax" width={25} height={25} icon={KappaxLogo}/>
          </div>
          <div className="navbar--nav-section--content--page-routes">
            <a href="">Home</a>
            <div className="navbar--nav-section--content--page-routes--links">
            <a href="">Products</a>
            <FaChevronDown className="links-icon"/>
            </div>
            <div className="navbar--nav-section--content--page-routes--links">
            <a href="">Resources</a>
            <FaChevronDown className="links-icon"/>
             </div>
            <a href="">Pricing</a>
          </div>
        </div>
        <div className="navbar--nav-section--nav-buttons">
          <div className="navbar--nav-section--nav-buttons--login-btn">
            <span>Log in</span>
          </div>
          <div className="navbar--nav-section--nav-buttons--signup-btn">
            <Button text="Sign up" size="small" variant="primary"/>
          </div>
        </div>
      </div>
    </div>
  )
}
