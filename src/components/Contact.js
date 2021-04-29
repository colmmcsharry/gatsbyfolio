import React, { useState, useEffect } from 'react'
import { Link as ScrollLink} from "react-scroll";
import iconlinkedin from '../images/icon-linkedin.svg'
import icongithub from '../images/icon-github.svg'


export default function Contact()  {







const [success, setSuccess] = useState(false);

useEffect(() => {
  if ( window.location.search.includes('success=true') ) {
    setSuccess(true);
    console.log('cheers!')
    document.getElementById('Contact').scrollIntoView()


  }
}, []);


    return (
    
      <React.Fragment>
 
      <div className="relative contactwrap" id="Contact">
      <div className="mt-20 custom-shape-divider-top-1619211418">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
      


        <div className="container relative">

          
            <h2 className="relative mt-10 mb-40 seper xl:text-6xl top-20">Contact</h2> 

            {success && (
  <p style={{ color: 'green'}}>
    Thanks for the mail, excited to read it!
  </p>
)}
            
          

  <ul className="details">
              <li>
                <strong>Phone:</strong>
                <a style={{textDecoration:'none'}} href="tel:0838381780">083 838-1780</a>

              </li>
              <li>
                <strong>Accounts:</strong>
                <p className="onmob"><a href="https://www.linkedin.com/in/colm-mcsharry/"><img src={iconlinkedin} className="inline" alt="badge" loading="lazy" /></a> 
                <a href="https://github.com/mcshazz"><img src={icongithub} className="inline" alt="badge" loading="lazy"/></a> </p>
              </li>
              <li>
                <strong>Email:</strong>
                
                  <p>Colmmcpt@gmail.com</p>
               
              </li>
            </ul>

          
            <form method="post" id="contactform" name="contactform" data-netlify="true" action="https://gatsbyfolio50612.gtsb.io/?success=true">
             
            <div>
              <label className="contactlabel">
                Your Name: <input type="text" name="name" required />
              </label>
            </div>
            <input type="hidden" name="form-name" value="contactform" />
            <div>
              <label className="contactlabel">
                Your Email: <input type="email" name="email" required />
              </label>
            </div>
            <div>
              <label className="contactlabel">
                Message: <textarea name="message" required></textarea>
              </label>
            </div>
            <div>
              <button type="submit" className="sendbut">Send</button>
            </div>
          </form>

        </div>

        
      </div>
      

      </React.Fragment>
    );
  
}
