import React from 'react'
import { Element } from 'react-scroll';
import '../hero/hero.css'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import herotop from '../../assets/My Products-1-001/My Products/herotop.png'

// organisation pictures

import org1 from '../../assets/organisation/domhup.webp'
import org2 from '../../assets/organisation/gem.jpeg'
import org3 from '../../assets/organisation/godrej.webp'
import org4 from '../../assets/organisation/kit.avif'
import org5 from '../../assets/organisation/lubrizole.png'
import org6 from '../../assets/organisation/mspl.jpeg'
import org7 from '../../assets/organisation/Pharma-Industry-scaled.jpg'

// storage unit images
import storage1 from '../../assets/My Products-1-001/My Products/storage1.jpg'
import storage2 from '../../assets/My Products-1-001/My Products/storage2.jpg'
import storage4 from '../../assets/My Products-1-001/My Products/storage4.jpg'
import storage5 from '../../assets/My Products-1-001/My Products/storage5.jpg'
import storage6 from '../../assets/My Products-1-001/My Products/storage6.jpg'
import storage7 from '../../assets/My Products-1-001/My Products/storage7.jpg'
import storage8 from '../../assets/My Products-1-001/My Products/storage8.jpg'
import storage9 from '../../assets/My Products-1-001/My Products/storage9.jpg'
import storage10 from '../../assets/My Products-1-001/My Products/storage10.jpg'

// trolly images
import trolly1 from '../../assets/My Products-1-001/My Products/trolly1.jpeg'
import trolly2 from '../../assets/My Products-1-001/My Products/trolly2.jpg'
import trolly3 from '../../assets/My Products-1-001/My Products/trolly3.jpg'
import trolly4 from '../../assets/My Products-1-001/My Products/trolly4.webp'
import trolly5 from '../../assets/My Products-1-001/My Products/trolly5.webp'
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

        {/* images */}
        <div className="imgcontainer">
          <img className='orgimg' src={org1} alt="" />
          <img className='orgimg' src={org2} alt="" />
          <img className='orgimg' src={org3} alt="" />
          <img className='orgimg' src={org4} alt="" />
          <img className='orgimg' src={org5} alt="" />
          <img className='orgimg' src={org6} alt="" />
          <img className='orgimg' src={org7} alt="" />



        </div>

      </Element>


      {/* services  */}
      <Element name='services' >
        <h1 className="headingtop">
          SERVICES
        </h1>
        <h2>Hospital Accesories</h2>
        <h3 className="headingtop">
          Storage Units
        </h3>
        <div className="storageunitbox">
          <img className='hospaccess' src={storage1} alt="" />
          <img className='hospaccess' src={storage2} alt="" />
          <img className='hospaccess' src={storage4} alt="" />
          <img className='hospaccess' src={storage5} alt="" />
          <img className='hospaccess' src={storage6} alt="" />
          <img className='hospaccess' src={storage7} alt="" />
          <img className='hospaccess' src={storage8} alt="" />
          <img className='hospaccess' src={storage9} alt="" />
          <img className='hospaccess' src={storage10} alt="" />
        </div>
        <h3 className="headingtop">
          Trollys
        </h3>
        <div className="trollypics">
          <img src={trolly1} alt="" className="trollypic" />
          <img src={trolly2} alt="" className="trollypic" />
          <img src={trolly3} alt="" className="trollypic" />
          <img src={trolly4} alt="" className="trollypic" />
          <img src={trolly5} alt="" className="trollypic" />
        </div>
      </Element>
     
    </>

  )
}

export default Hero