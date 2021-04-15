import * as React from "react"
import {useState} from 'react'
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
// import Navbar from './Navbar.js'



function Header(props) {

return (
    <>

<section className="relative">

    <div className="relative top-20">
        
        <div className="absolute inline text-3xl xl:text-7xl filter hover:brightness-125 logo "> Desi<span className="gletter">g</span>n<span className="rletter">er    </span></div>
        <code className="absolute inline text-2xl text-green-300 xl:text-6xl dev filter hover:brightness-125"> Dev<span className="text-white">elo</span><span className="text-red-300">per    </span></code>

        <StaticImage
            src="../images/mesplatter.png"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF",]}
            alt="A Gatsby astronaut"
            className="w-4/5 mx-auto"  
            />
    </div>

</section>
</>

)

}

  
  export default Header