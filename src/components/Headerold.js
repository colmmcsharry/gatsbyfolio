import React from "react"
import {useState} from 'react'
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import useSound from 'use-sound';
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

function Headerold(props) {

  const [isDisplay, setIsDisplay] = useState(false) ; 
  const [play] = useSound(shutter);

return (

<section>
 
  <div className="relative block mb-40 top-28 2xl:text-lg">
  Hi, I'm Colm...</div>


<div className="relative grid grid-cols-1 place-items-center xl:grid-cols-2 xl:px-24 2xl:gap-20 2xl:px-40 2xl:text-lg ">
  
  {/*the left/top of the two container divs */}
<div className="relative grid w-10/12 cursor-pointer afterclass place-items-center center md:w-8/12 ">

<StaticImage
      src="../images/mecartoon.png"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF",]}
      alt="A Gatsby astronaut"
      className= {isDisplay ? "disappear" : "block mecartoon "  }  
      onClick={() => {
        setTimeout(play, 1000);
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
    <div id="caption" className="text-xl text-gray-500 font-extralight"> Me at work </div>
    </div>
</div>
{/* left side ends */}

    <div className="p-6 leading-relaxed text-left pt-28 m-top-6 max-w-prose"> 
     <p>Welcome and thanks for checking out my portfolio.</p> <br/>
                 <p> I strive to create beautiful web apps with an emphasis on a quality user experience.
                  I am currently looking for a role with a company where I can continue to grow and learn. I am equally comfortable working alone or with a team.</p> 
                   <br/>
                  <p>When I'm not coding I enjoy sports, photography,
                  music festivals and nights in or out with friends. </p>

                  <br/> 
           <p>  If you'd like to read more about me and my journey into coding, just </p>
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


    

                     
</div>   
</section>









  
)

}



export default Headerold
