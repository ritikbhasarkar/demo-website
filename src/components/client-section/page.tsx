import FeaturedClient from "../featured-client/page";
import './client-section.scss'

import hdfcLogo from '/Users/Legion/demo-website/public/company/hdfc.png'
import lenskartLogo from '/Users/Legion/demo-website/public/company/lenskart.png'
import teslaLogo from '/Users/Legion/demo-website/public/company/tesla.png'
import uberLogo from '/Users/Legion/demo-website/public/company/uber.png'


const ClientSection= () => {
  return (
    <div className="client-section">
      <div className="client-section--heading">
        <span>Join 4,000+ companies already growing</span>
      </div>
      <div className="client-section--client-logos">
        <FeaturedClient icon={hdfcLogo} text={'HDFC'} width={45} height={45}/>
        <FeaturedClient icon={lenskartLogo} text={'Lenskart'} width={45} height={45}/>
        <FeaturedClient icon={teslaLogo} text={'Tesla'} width={45} height={45}/>
        <FeaturedClient icon={uberLogo} text={'Uber'} width={45} height={45}/>
      </div>
    </div>
  )
}

export default ClientSection