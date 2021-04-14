import React from "react"
import hed from '../images/headshotUpwork.jpg'
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import mesplatter from '../images/medev.png'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from '../components/Navbar.js'
import {useState} from 'react'





const TestPage = (props) => (


    <div className="relative slida">

<div className="absolute inline top-40 left-10 outline-white dev"> 
<div className="filter hover:brightness-125 logo "> Desi<span className="gletter">g</span>n<span className="rletter">er    </span></div>
</div>



<img src={mesplatter} className="medev" />



    </div>



)


export default TestPage