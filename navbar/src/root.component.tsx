import React from 'react'
import { Button, IconButton } from '@mui/material'
import { ShoppingCartRounded } from '@mui/icons-material'
import { navigateToUrl } from 'single-spa'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={require('./logo2.png')} className='logo' alt="Logo" />
      <div className="contents">
        <ul>
          <a href='/'><li>Home</li></a>
          <li>About Us</li>
          <li>Contact Us</li>
          <li><a href='/cart'><IconButton aria-label='cart'><ShoppingCartRounded fontSize='large' sx={{color:'black'}}/></IconButton></a></li>
          <li><a href='/auth' onClick={navigateToUrl}><Button variant='contained' style={{backgroundColor:'orangered'}}>Login</Button></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar