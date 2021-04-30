import React from "react"
import {useState} from 'react'
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
// import useSound from 'use-sound';
import shutter from '../sounds/shutter.mp3';
import mecartoon from '../images/mecartoon.png'
import iconjs from '../images/icon-js.svg'
import icongatsby from '../images/icon-gatsby.svg'
import iconreact from '../images/icon-react.svg'
import iconsass from '../images/icon-sass.svg'
import iconps from '../images/icon-ps.svg'
import iconsketch from '../images/icon-sketch.svg'
import icongit from '../images/icon-git.svg'
import iconcss from '../images/icon-css.svg'
import iconhtml from '../images/icon-html.svg'
import { Link as ScrollLink } from 'react-scroll'

function Headerold(props) {

  const [isDisplay, setIsDisplay] = useState(false) ; 
  // const [play] = useSound(shutter);

return (

<section id="oldsection" className="relative oldsec">




 
<div className="relative grid grid-cols-1 pb-40 gap-36 place-items-center xl:grid-cols-2 xl:px-24 xl:gap-0 2xl:gap-20 2xl:px-40 2xl:text-lg ">

<div className="relative p-6 leading-relaxed text-left blurb pt-28 m-top-6 max-w-prose"> 
                 <p> 
                  I am a developer from Dublin who began learning to design and build websites in 2018.
                  I'm currently looking for a role with a company where I can continue to grow and learn. I'm equally comfortable working alone or with a team.</p> 
                  
                  <p>When I'm not coding I enjoy sports, photography,
                  music festivals and nights in or out with friends.
                   </p>

                  
           <p> Please check out my projects below. If you'd like to read more about me and my journey into coding, just </p>
             <br/><br/>
             <div className="inline-block align-top">
             <ul className="pr-5 mb-4 leading-relaxed"><span className="font-bold text-cyan-heading"> Courses </span>
                      <hr/>
                        <li className="mt-2 underline"><a href="https://docdro.id/ZNxICaa" target="_blank" rel="noreferrer"> Polyglot Bootcamp</a></li>
                        <li className="underline"><a href="https://www.theodinproject.com/" target="_blank" rel="noreferrer">The Odin Project</a></li>
                        <li className="underline"><a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/" target="_blank" rel="noreferrer">The Complete Web Dev </a></li>
                     
                      </ul>
                      </div>


                      

                       
                      <div className="inline-block mb-4 align-top ">
                      <ul className="leading-relaxed xl:pl-10"><span className="font-bold text-cyan-heading">Skills</span>
                        <hr/>
      
                        <li className="mt-2">HTML/CSS/JS</li>
                        <li>Git/Github</li>
                        <li>React/Gatsby </li>
                        <li>Node.js</li>
                       <li>Photoshop/Sketch</li>
                        <li>CSS-In-JS/Tailwind</li>
                       <li>SQL/GraphQL</li>
                       <li>API requests</li>
                       <li>Wordpress/Webflow</li>
                      
                      </ul>
                      </div>

                      <ul className=" w-6/6" >
      <li className="inline-block w-6 mx-1 lg:mx-2"><img src={iconhtml} loading="lazy" alt="badge" /></li>
      
      <li className="inline-block w-6 mx-1 lg:mx-2"><img src={iconcss}loading="lazy"alt="badge" /></li> 
       
      <li className="inline-block w-6 mx-1 lg:mx-2">  <img src={iconjs}loading="lazy"alt="badge"/> </li>
      <li className="inline-block mx-1 w-7 lg:mx-2"><img src={icongit} loading="lazy" alt="badge"/></li>
      <li className="inline-block mx-1 w-7 lg:mx-2"><img src={iconreact}loading="lazy"alt="badge" /></li>
      <li className="inline-block mx-1 w-7 lg:mx-2"> <img src={icongatsby}loading="lazy"alt="badge"/> </li>
      <li className="inline-block mx-1 w-7 lg:mx-2"><img src={iconsass} loading="lazy" alt="badge"/></li>
      <li className="inline-block mx-1 w-7 lg:mx-2"> <img src={iconps}loading="lazy" alt="badge"/></li>
     <li className="inline-block mx-1 w-7 lg:mx-2"> <img src={iconsketch}loading="lazy"alt="badge"/> </li>
   
                            </ul>


             
    </div>


  
  {/*the left/top of the two container divs */}
<div className="relative grid w-10/12 cursor-pointer afterclass place-items-center center md:w-8/12 ">

<StaticImage
      src="../images/mecartoon.png"
      quality={80}
      formats={["AUTO", "WEBP", "AVIF",]}
      alt="A Gatsby astronaut"
      className= {isDisplay ? "disappear" : "block mecartoon "  }  
      onClick={() => {
        // setTimeout(play, 1000);
        setIsDisplay( true);
      }}
    />



<div id="flash" className={isDisplay ? "flashy disappear absolute right-2 z-10 " : "smol"} ></div>

   <div className={isDisplay ?  "absolute p-2 w-10/12 mx-10 z-10 my-0 transform bg-white shadow-2xl photoframe filter-grayscale  lg:p-3 hover:filter-none hover:rotate-0 hover:scale-125 hover:shadow-sm"  : "hidden"}>
    <StaticImage
      src="../images/me-insta.jpg"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF", "JPEG"]}
      alt="me at work"
    />
    <div id="caption" className="text-xl text-gray-500 font-extralight"> Hello again &#9786;  </div>
    </div>
</div>
{/* left side ends */}



    

                     
</div> 

<div class="custom-shape-divider-bottom-1619215728">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>

</section>









  
)

}



export default Headerold
