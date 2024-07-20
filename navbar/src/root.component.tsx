// export default function Root(props) {
//   return <Navbar {...props} />;
// }

import React from 'react'
import { Button, IconButton } from '@mui/material'
import { ShoppingCartRounded } from '@mui/icons-material'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={require('./logo2.png')} className='logo' alt="Logo" />
      <div className="contents">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li><IconButton aria-label='cart'><ShoppingCartRounded fontSize='large' sx={{color:'black'}}/></IconButton></li>
          <li><Button variant='contained' style={{backgroundColor:'orangered'}}>Login</Button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar