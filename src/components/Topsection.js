import * as React from "react"
import {useState} from 'react'
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from './Navbar.js'
import MouseParticles from 'react-mouse-particles'



function Topsection(props) {

return (
    <>
 <Navbar/>
 <MouseParticles g={1} color="random" cull="oldsec,lefthalf,grid,blurb,allproj,contactwrap,navclass,lightswitch" />


 <section className="relative topsec">
<div className="absolute left-0 z-10 w-6/12 h-screen lefthalf"></div>

 <div className="main-container">
      <div className="text-green-500 typewriter-text xl:text-xl">
        Hi, I'm Colm
      </div>
    </div>

    

<div className="relative top-20 fadein">
  
    

<code id="Dev" className="absolute inline text-xl dev xl:text-6xl filter hover:brightness-125"> Dev<span id="elo">elo</span><span id="Per">per    </span></code>

<div id="logo" className="absolute inline text-2xl logoclass xl:text-7xl "> Desi<span className="gletter">g</span>n<span className="rletter">er    </span></div>
<div className="absolute right-0 w-6/12 h-screen righthalf"></div>  

  

    <StaticImage
        src="../images/mesplatter.png"
        quality={80}
        formats={["AUTO", "WEBP", "AVIF",]}
        alt="my head"
        className="w-7/12 mx-auto z-20 lg:w-5/12 outline-white -bottom-1.5 myhead lg:filter lg:filter-grayscale hover:filter-none"  
        />
        <div className="firstseper seper "> {"         "}         </div>
</div>


</section>

</>

)

}

  
  export default Topsection