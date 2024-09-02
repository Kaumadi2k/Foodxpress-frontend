import React, { useEffect, useState } from 'react'
import { Button, IconButton, MenuItem, Typography, Menu } from '@mui/material'
import { AccountCircle, Logout, ShoppingCartRounded, VerifiedUser } from '@mui/icons-material'
import { navigateToUrl } from 'single-spa'
import './navbar.css'
import { jwtDecode } from 'jwt-decode'

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [anchorEL, setAnchorEl] = useState<null | HTMLElement>(null);

  //const idToken = sessionStorage.getItem('idToken');

  useEffect(()=>{
    const idToken = sessionStorage.getItem('idToken');
    if(idToken){
      try{
        const decodeToken: any = jwtDecode(idToken);
        if(decodeToken && decodeToken.email){
          setUser(decodeToken.email);
          sessionStorage.setItem('userId', decodeToken.sub);
          console.log('user:',user);
        }
        else{
          console.error('email is not found in token');
        }
      }catch(err){
        console.error('Failed to decode token', err);
      }
    }
  },[]);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }
  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const handleLogout = () => {
    sessionStorage.removeItem('idToken');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('userId')
    setUser(null);
    handleMenuClose();
    navigateToUrl('/auth');
  };
  
  return (
    <div className='Navbar'>
      <img src={require('./logo2.png')} className='logo' alt="Logo" />
      <div className="contents">
        <ul>
          <a href='/'><li>Home</li></a>
          <li>About Us</li>
          <li>Contact Us</li>
          <li><a href='/cart'><IconButton aria-label='cart'><ShoppingCartRounded fontSize='large' sx={{color:'black'}}/></IconButton></a></li>
          
            {user ? 
            <div>
              <IconButton onClick={handleMenuClick}><AccountCircle fontSize='large' sx={{color:'black'}}></AccountCircle></IconButton>
              <Menu
                anchorEl={anchorEL}
                open={Boolean(anchorEL)}
                onClose={handleMenuClose}
              >
                <MenuItem disabled><Typography variant="body2">{user}</Typography></MenuItem>
                <MenuItem onClick={handleLogout}><Logout></Logout><Typography>LogOut</Typography></MenuItem>
              </Menu>
            </div>
              :
              <a href='/auth' onClick={navigateToUrl}><Button variant='contained' style={{backgroundColor:'orangered'}}>Login</Button></a>}
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar