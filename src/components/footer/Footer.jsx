import React from 'react';
import '../footer/footer.css';
import { Element } from 'react-scroll';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import doc from '../../assets/pooja tech.pdf'
const Footer = () => {
  return (
    <>
      <Element name='contacts'>
        <footer className="footer">
          <div className="footer-content">
            <h3>POOJA TECH</h3>
            <p className="tagline">Complete Solutions for Pharmaceutical & Industrial Needs</p>

            <div className="footer-info">
              <div className="numbers">

                <div className="footer-item">
                  <FaPhoneAlt className="footer-icon" />
                  <a href="tel:+919833353433"><span>+91-9833353433</span></a>
                </div>


                <a href="https://wa.me/917021336079" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="footer-icon" />
                  <span>WhatsApp (Sales Support)</span>
                </a>
              </div>


              <div className="footer-item">
                <FaEnvelope className="footer-icon" />
                <a href="mailto:deepakumarpandey71@gmail.com"><span>deepakumarpandey71@gmail.com</span></a>
              </div>
              <div className="footer-item">
                <FaMapMarkerAlt className="footer-icon" />
                <a href="https://www.google.com/maps/place/Vrundavan/@21.1013284,73.0335233,17z/data=!3m1!4b1!4m6!3m5!1s0x3be05d0021673ddf:0x736167174d6adf02!8m2!3d21.1013284!4d73.0360982!16s%2Fg%2F11w1vkfmqs?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D">
                  <span> Surat Office Address:-
                    221 Vrundavan Park,
                    Tundi, Gangadhara,
                    Palsana-394310(Click to go to Location)</span>
                </a>
              </div>
            </div>

            <p className="copyright">
              © {new Date().getFullYear()} Pooja Tech. All rights reserved.
            </p>
          </div>
          <div className="pdf">
            <p>visit our documentation</p>
            <button className='document'>
              <a href={doc} download='Pooja tech'>Pooja Tech</a>
            </button>
          </div>
        </footer>

      </Element>


    </>

  );
};

export default Footer;
