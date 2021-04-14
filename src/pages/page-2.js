import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"


const SecondPage = (props) => (
  <>
    <SEO title="Page two" />



<div className="p-6">

<Link to="/">X</Link>

   
<h2 className="text-3xl font-extrabold text-center text-mycyan"> Crezo Construction </h2>

    <div className="grid grid-cols-1 gap-20 xl:grid-cols-2">

    
      <div className="mx-auto column">
    
 
      

      <h3> The Backstory</h3>

<p>A staff member of this construction company reached out to me after I made an ad offering to help local businesses with their websites. Their old site was made themselves using Wordpress but, in their own words, “wasn’t great”.</p>

<p>I checked it out and identified many areas areas that needed improvement, such as;</p>  <ul className="my-4 font-light list-disc list-inside"> <li>Initial load time was very slow </li> <li> Fonts were bland and often clashed with the background colour</li>  <li>Animations were janky and often distracting</li> <li>Positioning of some images and divs was obtrusive</li> <li>Responsiveness was poor, eg. horizontal scroll on mobile!</li> <li>Overall design was generic and uninspired</li>  </ul>

<p> So, I saw lots of areas where the performance and user experience could be improved.</p>

<figure className="my-8 left">
<StaticImage
      src="../images/CurrentCrezoLighthouse.jpg"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF", "JPEG"]}
      alt="me at work"
    /> 
<figcaption className="text-sm text-center text-gray-500">Their old Lighthouse scores</figcaption>
</figure>








<h3> The Tech Stack</h3>

<p>I had been reading about Gatsby.js a lot, and decided this project would be an ideal chance to start using it.</p>

<p>I also wanted the Crezo staff to be able to update the site content themselves, so I needed to link the site to a Content Management System.</p>

<p>Since this was my first time using Gatsby, and also my first time using a CMS, I decided to look for starter templates just to see how it all works. Eventually I found one that combined Gatsby with Contentful, a modern “headless” CMS.</p>

<p>Because this template was built as a web developer’s portfolio, the fonts, layout, and overall structure of the site needed to be changed, but I was able to dig into the code and see how the data was sent back and forth between client and Contenful. Gatsby uses GraphQL queries to “fetch” the data it needs, either from a local directory or from Contentful.</p>

<h3> GraphQL for images</h3>

<p>GraphQL was quite confusing at first but after a few days I could understand it. It actually turned out to be a huge time saver for me, as with just a few lines of code, it can query for images and return them in multiple different sizes, and automatically choose the correct one based on the user’s viewport, connection speed, internet browser, etc.</p>

<p>This meant no more tediously cropping and compressing images into several sizes, and using media-queries or picture/srcSet to choose the appropriate one. Going forward, I will continue to utilise Gatsby for image-heavy websites.</p>

<p>Now, the image galleries on the website were loading much faster, even for viewers on poor internet connections. I also gave them a shiny new background-image with the company slogan overlaid on it.</p>
 
                    






      </div>
      <div className="mx-auto column">

      <h3>Lighthouse Audits</h3><p>Knowing that Google is starting to rank pages based on their loading speed, accessibility, and best-practices, I set about achieving perfect scores in all Lighthouse audits.</p>

     </div>
   
   </div>


<Link to="/">X</Link>

</div>
 </> 
)

export default SecondPage
