import React from 'react'
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom'
import '../hero/hero.css'
import '../hero/media.css'
import herotop from '../../assets/My Products-1-001/My Products/herotop.png'
import {storageImages , trollyImages, basinImages } from '../../ImageData'
// organisation pictures

import org1 from '../../assets/organisation/domhup.webp'
import org2 from '../../assets/organisation/gem.jpeg'
import org3 from '../../assets/organisation/godrej.webp'
import org4 from '../../assets/organisation/kit.avif'
import org5 from '../../assets/organisation/lubrizole.png'
import org6 from '../../assets/organisation/mspl.jpeg'
import org7 from '../../assets/organisation/Pharma-Industry-scaled.jpg'


const Hero = () => {




  return (
    <>
      <Element name="hero">

        <div className="topContainer">
          <div className="product">
            <img className='productimg' src={herotop} alt="" />
          </div>
          <div className="textcontainer">
            <h4 >We take pride in offering high-quality finished products at highly competitive prices. We would be honored to become one of your esteemed vendors and look forward to the opportunity to supply our products to your organization.</h4>
          </div>

        </div>
        <div className="topbottom">
          <div className="topbottomtext">
            WE MANUFACTURE CUSTOMIZED PRODUCTS AS PER CLIENT REQUIREMENTS. WE ALSO UNDERTAKE MS AND SS FABRICATION WORK.
          </div>
        </div>
      </Element>
      <Element name='about'>
        <div className="headingdiv">
          <h1 className="headingtop">
          ABOUT US
        </h1>
        </div>

        <div className="paradev"><p>Pooja Tech Complete Solutions is committed to establishing a world-class manufacturing facility that consistently delivers superior quality products to our clients. In alignment with this mission, we specialize in providing customized solutions tailored to the specific requirements of each customer.

All products at PTCS are manufactured using high-grade materials, including mild steel and stainless steel, ensuring durability and performance. Our operations are supported by a skilled and dedicated workforce that drives efficiency and excellence in every aspect of production.

Our manufacturing unit is located in Surat, Gujarat, and is equipped with efficient machinery to ensure precision and quality. All processes are carried out in-house, allowing us to maintain full control over production timelines and standards.

As we continue to expand our capabilities, we remain focused on enhancing product quality and streamlining our processes. We take pride in offering high-quality finished products at highly competitive prices and would be honored to become one of your esteemed vendors. We look forward to the opportunity to serve your organization with our reliable and customized solution</p>
        </div>
        
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
      <div className="headingdiv">
          <h1 className="headingtop">SERVICES</h1>
        </div>
        <h2>Hospital Accessories</h2>
        <h3 className="headingtop">Storage Units</h3>
        <div className="storageunitbox">
          {/* Map over storageImages to create clickable links */}
          {storageImages.map((image) => (
            <Link key={image.id} to={`/products/storage/${image.id}`}>
              <img className="hospaccess" src={image.src} alt={image.alt} />
            </Link>
          ))}
        </div>
        <h3 className="headingtop">Trolleys</h3>
        <div className="trollypics">
          {/* Map over trollyImages to create clickable links */}
          {trollyImages.map((image) => (
            <Link key={image.id} to={`/products/trolly/${image.id}`}>
              <img className="trollypic" src={image.src} alt={image.alt} />
            </Link>
          ))}
        </div>
        <h3 className="headingtop">Sink And Basins</h3>
        <div className="trollypics">
          {/* Map over trollyImages to create clickable links */}
          {basinImages.map((image) => (
            <Link key={image.id} to={`/products/basin/${image.id}`}>
              <img className="trollypic" src={image.src} alt={image.alt} />
            </Link>
          ))}
        </div>

      </Element>
     
    </>

  )
}

export default Hero