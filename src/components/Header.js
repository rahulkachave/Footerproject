import React from 'react'
import {NavLink} from 'react-router-dom'  

const Header = () => {

  const navstyles=({isActive}) =>{                  //const navstyles function is for css
    return{
      TextDecoder:isActive ? "none":"underline",
      color:isActive ?"red": "white",
      fontSize:'25px',
      padding: '10px'
    };
  };
  return (
    <div>
    
    <div className='header'>
     
     <NavLink style={navstyles} to={'/app'}>Home</NavLink>
    <NavLink style={navstyles} to='/about'>About</NavLink>
     <NavLink style={navstyles} to='/contact'>Contact</NavLink>
     
    </div>
    </div>
  )
}

export default Header