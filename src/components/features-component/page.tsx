import ProductFeatures from "../Product-feature/page"
import dashboard from '/Users/Legion/demo-website/public/features-dashboard.png'

const FeatureComponent = () => {
  return (
    <div>
        <ProductFeatures heading="Share team inboxes" 
        url={dashboard}
        subText="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."/>
    </div>
  )
}

export default FeatureComponent