import React from "react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import "../hero/hero.css";
import "../hero/media.css";
import herotop from "../../assets/My Products-1-001/My Products/herotop.png";
import { storageImages, trollyImages, basinImages, acImages } from "../../ImageData";
import afcpic from '../../assets/afc/wastemanagment0.png'
import afcpic2 from '../../assets/afc/wastemanagment.png'
import institution from '../../assets/afc/institutions.png'
import residence from '../../assets/afc/residence.png'
import awareness from '../../assets/afc/awareness.png'
import corporate from '../../assets/afc/corporates.png'

// organisation pictures

import org1 from "../../assets/organisation/domhup.webp";
import org2 from "../../assets/organisation/gem.jpeg";
import org3 from "../../assets/organisation/godrej.webp";
import org4 from "../../assets/organisation/kit.avif";
import org5 from "../../assets/organisation/lubrizole.png";
import org6 from "../../assets/organisation/mspl.jpeg";
import org7 from "../../assets/organisation/Pharma-Industry-scaled.jpg";

const Hero = () => {
  return (
    <>
      <Element name="hero">
        <div className="topContainer">
          <div className="product">
            <img className="productimg" src={herotop} alt="" />
          </div>
          <div className="textcontainer">
            <h4>
              We take pride in offering high-quality finished products at highly
              competitive prices. We would be honored to become one of your
              esteemed vendors and look forward to the opportunity to supply our
              products to your organization.
            </h4>
          </div>
        </div>
        <div className="topbottom">
          <div className="topbottomtext">
            WE MANUFACTURE CUSTOMIZED PRODUCTS AS PER CLIENT REQUIREMENTS. WE
            ALSO UNDERTAKE MS AND SS FABRICATION WORK.
          </div>
        </div>
      </Element>
      <Element name="about">
        <div className="headingdiv">
          <h1 className="headingtop">ABOUT US</h1>
        </div>

        <div className="paradev">
          <p>
            Pooja Tech Complete Solutions is committed to establishing a
            world-class manufacturing facility that consistently delivers
            superior quality products to our clients. In alignment with this
            mission, we specialize in providing customized solutions tailored to
            the specific requirements of each customer. All products at PTCS are
            manufactured using high-grade materials, including mild steel and
            stainless steel, ensuring durability and performance. Our operations
            are supported by a skilled and dedicated workforce that drives
            efficiency and excellence in every aspect of production. Our
            manufacturing unit is located in Surat Gujarat, and is equipped with
            efficient machinery to ensure precision and quality. All processes
            are carried out in-house, allowing us to maintain full control over
            production timelines and standards. As we continue to expand our
            capabilities, we remain focused on enhancing product quality and
            streamlining our processes. We take pride in offering high-quality
            finished products at highly competitive prices and would be honored
            to become one of your esteemed vendors. We look forward to the
            opportunity to serve your organization with our reliable and
            customized solution
          </p>
        </div>

        <div className="paradev">
          <p>
            {" "}
            We proudly serve a range of organizations, including leading
            pharmaceutical industries, with whom we have completed several
            projects and continue to maintain strong, ongoing partnerships.
          </p>
        </div>

        {/* images */}
        <div className="imgcontainer">
          <img className="orgimg" src={org1} alt="" />
          <img className="orgimg" src={org2} alt="" />
          <img className="orgimg" src={org3} alt="" />
          <img className="orgimg" src={org4} alt="" />
          <img className="orgimg" src={org5} alt="" />
          <img className="orgimg" src={org6} alt="" />
          <img className="orgimg" src={org7} alt="" />
        </div>
      </Element>

      {/* services  */}
      <Element name="services">
        <div className="headingdiv">
          <h1 className="headingtop">SERVICES</h1>
        </div>
         <div className="hospitalservice">
          <h1>Facility Services</h1>

        </div>
        <div className="paradev">
          <p>
            We take this opportunity to introduce our organization Abhinav Facility Services , a firm carried on by Mr. VIKRAM
BHANUDAS GARGOTE and Mr. SHAILENDER MISHRA as one of the young Fast Growing facility Management
organization. It provide our customer with a broad range of support facility like corporate services, Housekeeping
services and infrastructure management for both short term as well as long term , making expenses flexible to your
company's requirement.
Abhinav Facility Services now offers cleaning for Events ,corporates , homes and offices in in India to make your life
easy.
          </p>
        </div>
       <h3 className="headingtop">Hospitality and housekeeping</h3>        
     <div className="afctopimg">
      <img className="orgimg" src={afcpic} alt="" />
     </div>
    
     
     
  <div className="paradev scroll">
          <p>
            On one hand your premises of office and guests houses are shining with our dedicate staff focusing on the given task of keeping 
it new and neat, meanwhile on the other hand we also extend our services to the hospitality management apart from effective 
house keeping. Now the same services are available with Abhinav Facility Services in India.
The uniformed staff would be distinct in appearance and mannerisms apart from its assigned tasks and work forte. We 
provide:-

1)Office boys      2) Pantry boy    3)Executive house keeper     4)Supervisor
Your botherations and worries on hospitality and house keeping staff now ends here as we are ready with our well trained, 
skilled, well mannered and groomed staff to take care of your organization activities that involves pantry work and serving. Also 
a house keeper executive who knows his tasks well to ensure smooth operations within the house with respect to house 
keeping. Further we also provide staff for office work thus eliminating your search for an office boy and above all we would also 
depute a supervisor to supervise and monitor the daily proceedings and ensure zero deviation from the zeroed down tasks. Our 
staff of pantry boy, executive house keeper, office boy and supervisor would be highly reliable and good quality people who 
effectively handle tasks
By doing so the time consumption on these task force search, grooming and execution would be saved and the same could be 
diverted in effective business goal realization of the organization’s core issues that contributes to the very existence of it in the 
market. Why should any member in the organization spend any extra time on tasks that do not require ownership. It should be 
given to the experts who know head and tail of it and can operate without interfering in the organizational core tasks.
This will also solve a lot of HR related issues that would otherwise burden the organization. Just imagine one major headache
of maintaing and executing the work for the presentability is eliminated from the work list but yet you get the end result 
effectively every day every moment month on month year on year. Thus, making it a worthy bonus with no pain.
So if you are willing to progress with your organizational goals with no unwanted speed breakers by virtue of energy 
consumption of non core tasks then you must decide to choose to outsource the petty tasks that are of importance and it 
becomes imperative to outsource it to the best in the market so that the process of advancing toward your goals becomes 
hazel free. So when you are spending spend on the optimum which gives you best deal for good and rational pricing with no 
compromise on the quality.
Hospitality & Housekeeping

          </p>
        </div>
        <div className="afctopimg">
      <img className="orgimg" src={afcpic2} alt="" />
     </div>
<h3 className="headingtop">CORPORATES</h3>  
 <div className="afctopimg">
      <img className="orgimg" src={corporate} alt="" />
     </div>
<div className="paradev scroll">
          <p>
            Corporate organizations and tech parks comprise a
major portion of our clientele. Abhinav Facility Services
management system for all kinds of waste. We are
driven by systems and processes with a laser focus on
accurate data collection and reporting. Abhinav Facility
Services takes pride in having high compliance with
labour laws, operational health and safety
requirements compliance with various statutory
requirements.
To ensure effective office waste management in India,
we work with various departments of our client's teams
to help their organizations achieve their sustainability
goals. Awareness programs and employee engagement
lie in the heart of our efforts.
provides a complete end-to-end essential office waste
          </p>
        </div>
        <h3 className="headingtop">INSTITUTION</h3>  
 <div className="afctopimg">
      <img className="orgimg" src={institution} alt="" />
     </div>
<div className="paradev scroll">
          <p>
            Abhinav Facility Services is one of the top waste
management companies in India that offers
holistic waste management services to
schools and colleges to ensure the effective
diversion of waste generated at these
institutions from landfills. Through periodic
interactive sessions with students, our team
also educates young minds about the best
practices of zero waste management -
segregation at source, composting and
recycling, for instance. This goes a long way
in imbibing the values of sustainability and
awakening environmental consciousness
into the future leaders of our nation.
          </p>
        </div>
         <h3 className="headingtop">RESIDENCE</h3>  
 <div className="afctopimg">
      <img className="orgimg" src={residence} alt="" />
     </div>
<div className="paradev scroll">
          <p>
            Abhinav Facility Services is a pioneer in
providing professional decentralized Waste
Management solutions in India. Over the
past decade, Abhinav Facility Services has
developed a good understanding of the
dynamics of how residential outfits can be
steered towards establishing good
residential waste management solutions. It
involves close coordination with all
stakeholders including Resident Welfare
Associations, property managers, resident
volunteers, housekeeping teams, and
maintenance staff
          </p>
        </div>

              <h3 className="headingtop">AWARENESS</h3>  
 <div className="afctopimg">
      <img className="orgimg" src={awareness} alt="" />
     </div>

        <div className="paradev scroll">
          <p>
           
Awareness about the importance of sustainable waste
disposal management and its best practices are the
key to ensuring its effective adoption. Our training and
awareness sessions incorporate the basics of waste
segregation, waste types, and how one could minimize
their carbon footprint.
We customize our training, awareness and engagement
sessions for all sorts of audiences, ranging from school
students to senior management in large corporate
agencies. Our sessions are generally delivered as a part
of our SOP, prior to commencing operations at our
client premises, to the housekeeping staff and waste
generators. However, we also take up specially
designed engagement sessions and activities on an ad
hoc basis as well.

          </p>
        </div>
        

        <div className="hospitalservice">
          <h1>Hospital Accessories</h1>
        </div>

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
          {/* map over basin images */}
          {basinImages.map((image) => (
            <Link key={image.id} to={`/products/basin/${image.id}`}>
              <img className="trollypic" src={image.src} alt={image.alt} />
            </Link>
          ))}
        </div>   
        <h3 className="headingtop">Autoclaves</h3>
        <div className="trollypics">
          {/* map over autoclave images  */}
          {acImages.map((image) => (
            <Link key={image.id} to={`/products/autoclave/${image.id}`}>
              <img className="trollypic" src={image.src} alt={image.alt} />
            </Link>
          ))}
        </div>
      </Element>
    </>
  );
};

export default Hero;
