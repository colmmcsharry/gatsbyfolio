import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from '../components/Navbar.js'
import Topsection from '../components/Topsection.js'
import Headerold from '../components/Headerold.js'
import {useState} from 'react'
import ModalExamplePage from './modal-example.js'
import AllProjects from '../components/allprojects.js'
import crezo1 from  '../images/crezopic1new.jpg'
import crezo2 from  '../images/crezopic2.jpg'
import crezo3 from  '../images/crezopic3.jpg'
import crezo4 from  '../images/crezopic4.jpg'



function IndexPage() {


  return (
  <Layout>
    <SEO title="Home" />
<Topsection />


<Headerold />
  


<br/><br/><br/>
<AllProjects/>
 
 <Link to='/modal-example/'
  state={{
    modal: true
  }}
  >here</Link>
   <br/><br/>

    <Link
  to="/page-2/"
  state={{
    modal: true
  }}
>
  to pg2
</Link>


  </Layout>
)

}

export default IndexPage
