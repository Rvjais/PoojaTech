import React from 'react'
import { Element } from 'react-scroll';
import '../hero/hero.css'
import herotop from '../../assets/My Products-1-001/My Products/herotop.png'
const Hero = () => {
  return (
   <>
    <Element name="hero">

  <div className="topContainer">
        <div className="product">
          <img className='productimg' src={herotop} alt="" />
        </div>
        <div className="textcontainer">
          <h3 >We take pride in offering high-quality finished products at highly competitive prices. We would be honored to become one of your esteemed vendors and look forward to the opportunity to supply our products to your organization.</h3>
        </div>
        
      </div>
      <div className="topbottom">
          <div className="topbottomtext">
            WE MANUFACTURE CUSTOMIZED PRODUCTS AS PER CLIENT REQUIREMENTS. WE ALSO UNDERTAKE MS AND SS FABRICATION WORK.
          </div>
      </div>
    </Element>
    <Element name='about'>

      <h1 className="headingtop">
        ABOUT US
      </h1>
      <div className="paradev"><p> We proudly serve a range of organizations, including leading pharmaceutical industries, with whom we have completed several projects and continue to maintain strong, ongoing partnerships.</p>
</div>

    </Element>
   
   </>
    
  )
}

export default Hero