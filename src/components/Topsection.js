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

 <StaticImage
        src="../images/coldesign.png"
        quality={80}
        formats={["AUTO", "WEBP", "AVIF",]}
        alt="A Gatsby astronaut"
        className="absolute top-10 left-4 lg:top-0 testimg"  
        />

<StaticImage
        src="../images/code.png"
        quality={80}
        formats={["AUTO", "WEBP", "AVIF",]}
        alt="A Gatsby astronaut"
        className="absolute top-10 right-10 lg:right-20 lg:top-0 testimg"  
        />

<div className="relative top-20">
  
    




    <div className="absolute inline text-3xl xl:text-7xl filter hover:brightness-125 logo "> Desi<span className="gletter">g</span>n<span className="rletter">er    </span></div>
    <code className="absolute inline text-2xl text-green-300 xl:text-6xl dev filter hover:brightness-125"> Dev<span className="text-white">elo</span><span className="text-red-300">per    </span></code>

    <StaticImage
        src="../images/mesplatter.png"
        quality={80}
        formats={["AUTO", "WEBP", "AVIF",]}
        alt="A Gatsby astronaut"
        className="w-4/5 mx-auto"  
        />
</div>

</section>
</>

)

}

  
  export default Topsection