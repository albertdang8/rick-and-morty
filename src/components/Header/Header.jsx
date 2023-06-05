import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import './Header.css'

function Header() {

  //use {} and not [] b/c its a global state
  const {darkMode, setDarkMode} = useContext(ThemeContext);

  return (
    <div className={darkMode? "header-container header-dark":"header-container"}>
      <div>
        <Link to="/about" style={{marginRight:"10px"}}>About</Link>
        <Link to="/" style={{marginRight:"10px"}}>Home</Link>
        <Link to="/episodes">Episodes</Link>
      </div>
      <button className="theme-button" onClick={()=>setDarkMode(!darkMode)}>
        {
          darkMode?"Light Mode" : "Dark Mode"
        }
      </button>
    </div>
  );
}

export default Header;
