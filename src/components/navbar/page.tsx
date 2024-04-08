import Logo from "../website-icon/page"
import Button from "../buttons/page"


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar--section">
        <div className="navbar--section--nav-links">
          <>
          <Logo/>
          </>
          <div className="navbar--section--nav-links--page-routes">
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">Resources</a>
            <a href="">Pricing</a>
          </div>
          <div className="navbar--section--nav-buttons">
            <Button text="login" size="small" variant="primary" />
            <Button text="Sign up" size="small" variant="secondary"/>
          </div>
        </div>
      </div>
    </div>
  )
}
