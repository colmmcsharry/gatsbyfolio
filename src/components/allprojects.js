import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {useState} from 'react'
import Project from './project.js'
import crezo1 from  '../images/crezopic1new.jpg'
import crezo2 from  '../images/crezopic2.jpg'
import crezo3 from  '../images/crezopic3.jpg'
import crezo4 from  '../images/crezopic4.jpg'

export default function AllProjects(){

    return (

        <section id="projsection" className="relative pt-40 mb-40 ">




<h2 className="mb-20 seper xl:mb-40 xl:text-6xl">Projects</h2>
        
        
        <h3 className="font-semibold xl:text-3xl text-main-text">Crezo Construction</h3>

        
<Project description={

<p>I made this site for a small construction company in Vancouver. 
                   I replaced their old Wordpress site with a more modern
                   version using Gatsby.js.<br/><br/>

                   Loading times were vastly decreased and Lighthouse audit scores improved dramatically
                   in all areas.

                    <br/><br/>
                    I linked the site to Contentful CMS so they can manage the content themselves, without knowing any code.
                    <br/><br/> 
                    Click the link or image to visit the site. For detailed info about how I made this site and what I learned along the way just {" "}
                    
                    <Link
  to="/page-2/"
  state={{
    modal: true
  }}
>
Click Here
</Link>
                    
                    
                    </p>}

                      image1={crezo1} image2={crezo2} image3={crezo3} image4={crezo4}  />  


                      
 <h3 className="font-semibold xl:text-3xl text-main-text">Cosy Cabins</h3>
 <Project description={

<p>This is a mock-up website for my brother's company. The company is a bit like Air BnB, but specialises in off-the-grid cabins.
                     <br/><br/> Built using React, I tried to convey 
                    the overall ethos of the company with the minimalist website design.

                    <br/><br/>
                    The site contains image galleries, a blog, 5 day weather forecast using API, and some 
                    quirky animations.
                    <br/><br/> 
                     When the company launches, I will add a booking / payment system to the site. <br/> <br/>
                     For more details on how I made this site, just <Link
  to="/page-2/"
  state={{
    modal: true
  }}
  Click Here
></Link></p>

 } image1={crezo1} image2={crezo2} image3={crezo3} image4={crezo4} />

 <h3 className="font-semibold xl:text-3xl text-main-text">Networkers</h3>

 <Project description={<p>Networkers is a site for finding skilled workers, fast.<br/>
                  <br/>It's almost like Tinder, except instead of swiping through dates
                  you swipe through workers in your area. <br/>
                  <br/>

                  So, if you need a hair cut, a pipe fixed or a website designed, you can swipe through the 
                  local barbers, plumbers or designers, and hire one you like!

                    <br/><br/> 
                    This was my first project built using React and I learned a tonne in the process. 
                    To read more about it, just Click Here </p>} image1={crezo1} image2={crezo2} image3={crezo3} image4={crezo4}  />     




                    </section>

    )



}