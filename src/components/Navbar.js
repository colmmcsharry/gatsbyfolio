import React, { useState } from "react"
import { Link } from "gatsby"
import Menu from 'react-burger-menu/lib/menus/slide'
import { Link as ScrollLink } from 'react-scroll'

export default class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
 // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }



  showSettings (event) {
    event.preventDefault();
  }


  render () {
 
    return (
      <>
      <div id="largenav" className="fixed block w-screen h-32 pt-5 text-right navclass "> 
      <ul className= "hidden mr-20 space-x-10 text-cyan-heading lg:inline" >
        <li className="inline cursor-pointer navitem hover:filter-brighten">  <ScrollLink className="menu-item" to="oldsection" spy={true} offset={-20} smooth={true} duration={900}> About </ScrollLink></li>
        <li className="inline cursor-pointer navitem hover:filter-brighten">  <ScrollLink className="menu-item" to="projsection" spy={true} offset={-20} smooth={true} duration={900}> Projects </ScrollLink></li>
        <li className="inline cursor-pointer navitem hover:filter-brighten">  <ScrollLink className="menu-item" to="Contact" spy={true} offset={-20} smooth={true} duration={900}> Contact </ScrollLink></li>
      </ul>
      </div>
    
        
         


      <Menu
      right
      width={ 220 }
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
        <ScrollLink onClick={() => this.closeMenu()} className="menu-item" to="oldsection" spy={true} offset={-20} smooth={true} duration={900}> About </ScrollLink>
        <ScrollLink onClick={() => this.closeMenu()} className="menu-item" to="projsection" spy={true} offset={-20} smooth={true} duration={900}> Projects </ScrollLink>
        <ScrollLink onClick={() => this.closeMenu()} className="menu-item" to="Contact" spy={true} offset={-20} smooth={true} duration={900}> Contact </ScrollLink>
        
      </Menu>


</>
    );
  }
}