import * as React from "react"
import {useState} from 'react'
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from './Navbar.js'



function Topsection(props) {

return (
    <>
 <Navbar/>
 <section className="relative">

 <div className="main-container">
      <div className="typewriter-text xl:text-xl">
        Hi, I'm Colm
      </div>
    </div>



<div className="relative bordbot top-20 fadein">
  
    




    <div className="absolute inline text-2xl xl:text-7xl filter hover:brightness-125 logo "> Desi<span className="gletter">g</span>n<span className="rletter">er    </span></div>
  
    <code className="absolute inline text-xl text-green-300 xl:text-6xl dev filter hover:brightness-125"> Dev<span className="text-white">elo</span><span className="text-red-300">per    </span></code>
  

    <StaticImage
        src="../images/mesplatter.png"
        quality={80}
        formats={["AUTO", "WEBP", "AVIF",]}
        alt="my head"
        className="w-7/12 mx-auto lg:w-5/12 myhead"  
        />
</div>

</section>
</>

)

}

  
  export default Topsection