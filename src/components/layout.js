import React, { useContext } from 'react';
import PropTypes from 'prop-types';
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
      } text-main-text varbg text-center transition-all duration-300 m-0 px-0 min-h-screen `}>

    
      <Toggle
        id="theme-toggle"
        className="z-30"
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
