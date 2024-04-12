import Logo from "../website-icon/page"
import Button from "../buttons/page"
import './navbar.scss'
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
              <svg width="14" height="12" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className="navbar--nav-section--content--page-routes--links">
            <a href="">Resources</a>
              <svg width="14" height="12" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

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
