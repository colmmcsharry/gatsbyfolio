import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import Toggle from 'react-toggle';
import { ThemeContext } from '../context/themeContext';
import Navbar from '../components/Navbar.js'

const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (

    <div
      className={`${
        theme === 'light' ? 'theme-light' : 'theme-dark'
      } bg-primary text-main-text text-center transition-all duration-300 m-0 px-0 min-h-screen `}>
    {/*above is setting all the text colors on both themes so I don't need to */}
<Navbar/>
    
      <Toggle
        id="theme-toggle"
        checked={theme === 'light' ? true : false}
        onChange={handleThemeToggle}
      />
      <label htmlFor="theme-toggle">
      </label>
      
      <main>{children}</main>
     
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
