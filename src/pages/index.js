import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from '../components/Navbar.js'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

<section>
    <h1 className="text-6xl text-cyan-heading 
    lg:text-9xl font-sans mb-20">Hi, I'm Colm</h1>

<div className="grid grid-cols-1 place-items-center p-8 lg:grid-cols-2 lg:gap-20 lg:px-40 xl:text-lg 2xl:px-60 py-40 ">

   <div className="photoframe border border-gray-300 transform relative w-5/6 shadow-2xl rotate-6 lg:w-4/6 
   filter-grayscale p-2 lg:p-3 hover:filter-none hover:rotate-0 hover:scale-125 hover:shadow-sm  my-0 mx-auto bg-white mb-20">
    <StaticImage
      src="../images/me-insta.jpg"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      className="photo"
    />
    <div id="caption" className="font-thin text-gray-800"> Me at work </div>
    </div>

    <div className="blurb leading-relaxed text-left"> 
     <p>Welcome and thanks for checking out my portfolio.</p><br/>




                  I am a developer from Dublin and I've been learning my craft since 2018. I strive to create beautiful web apps with an emphasis on a quality user experience.<br/> <br/>
                  I am currently looking for developer roles with a company where I can continue to grow and learn. I am equally comfortable working alone or with a team. 
                   <br/> <br/>
                  When I'm not coding or in the midst of a pandemic, I enjoy playing sports,
                  going to music festivals and nights in or out with friends. 

                  <br/> <br/> 
             If you'd like to read more about me and my journey into coding, just 
    </div>



</div>   
</section>
  

    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>

    <div id="About" className="mt-60 "> this is the about div </div>
  </Layout>
)

export default IndexPage
