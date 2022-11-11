import React from 'react'
import './Navigation.css'
import cocktailLogo from './cocktailslogo.svg'
import { Link } from 'react-router-dom'


function Navigation() {
  return (
   <div className='navigation-container'>
     <div className='image-container'>
        <img src={cocktailLogo} />
      </div>
      <div className='nav-links'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/about'>About</Link>
      </div>
   </div>
  )
}

export default Navigation