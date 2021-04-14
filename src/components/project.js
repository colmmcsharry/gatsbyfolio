import React from "react"
import responsive from '../images/responsive.png'

export default function Project(props){




    return (

        <div id="projwrap">

  
        <a className="projlink" href={props.link} target="_blank" rel="noreferrer"><h3 className="projtitle">{props.title}</h3></a>
       
         <div id="gridwrapper">
       
           <div id="left">
       
       {props.description}
       
           </div>

           <div id="right" className="fadeload">
           <a href={props.link} target="_blank" rel="noreferrer"> 
            
       {/*inner is the screen inside the laptop. */}
       
         
       
             <div className="innerwrapper">   
         <img className="inner" src={props.image1}  alt="laptoppic" />
         <img className="inner" src={props.image2} alt="laptoppic" />
         <img className="inner" src={props.image3} alt="laptoppic" />
         <img className="inner" src={props.image4} alt="laptoppic" />  
       
             </div>   
       
        <div className="ipadwrapper">      
             <img className="ipad"  src={props.image1} alt="tabletpic"  />
             <img className="ipad" src={props.image2} alt="tabletpic" />
             <img className="ipad" src={props.image3} alt="tabletpic" />   
            <img className="ipad" 	src={props.image4} alt="tabletpic" />    
             </div>          
        
        <div className="phonewrapper">     
        <img className="phone" src={props.image1} alt="phonepic"               />
                 <img className="phone" src={props.image2} alt="phonepic"      />
             <img className="phone" src={props.image3} alt="phonepic"          />   
            <img className="phone" src={props.image4} alt="phonepic"           />   
             </div>
             
             {/*this is the png of all the devices*/}
         <img className="devices" src={responsive} alt="devicespic" />   
       
       </a>
         
             
           
            
           
           </div>
       
      
         </div>  
       
       
       
       </div>  



    )
}