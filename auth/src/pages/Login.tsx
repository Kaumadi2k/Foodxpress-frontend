import { Alert, Box, Button, Card, CardContent, CardMedia, TextField, Typography, IconButton } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  //const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
        username,
        password
      });
      sessionStorage.setItem('accessTokem', response.data.accessToken);
      sessionStorage.setItem('idToken', response.data.idToken);

      console.log('Login successful:', response.data);
      // navigate('/home');
      window.location.href = '/home';
      
      setSuccess('Login Successfull');

      setTimeout(()=>{
        window.location.href = '/home';
      }, 5000);
    
    } catch (err) {
        setError('Login failed. Please check your credentials.');
        console.error('Login failed:', err);
    }
  }
  
  return (
    <div>
      <Box
        height={'90vh'}
        display={'flex'}
        // alignItems={'center'}
        justifyContent={'center'}
        margin={'20px'}
      >
        <Card style={{display:'flex', flexDirection:'row', padding:'20px'}}>
          <CardMedia
            component={'img'}
            image={require('./food-groups.png')}
            style={{flex:1, width:'50%'}}
          />
          <CardContent style={{margin:'10px', display:'flex', flexDirection:'column', flex:1, justifyContent:'center'}}>
            <img src={require('./logo2.png')} style={{width:'20%'}} />
            <Typography variant={'h4'} sx={{margin:'20px', color:'orangered'}}><strong>Welcome Back ...</strong></Typography>

            {success && <Alert severity='success'>{success}</Alert>}
            {error && <Alert severity='error'>{error}</Alert>}

            <TextField
              fullWidth
              required
              id='email'
              label='Email'
              style={{margin:'20px'}}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            >

            </TextField>
            <TextField
              fullWidth
              required
              id='password'
              label='Password'
              type='password'
              style={{margin:'20px'}}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
            </TextField>

            <Button variant='contained' style={{margin:'20px'}} onClick={handleLogin}>Login</Button>
            <div style={{display:'flex', flexDirection:'row', margin:'20px'}}>
              <Typography variant='body1'>Don't have an account?</Typography>
              <Typography variant='body1'><Link to={'/register'} style={{textDecoration:'none', color:'orangered'}}>Create account</Link></Typography>
            </div>
            <a href='/'><Button>Back</Button></a>
          </CardContent>
        </Card> 
      </Box> 
    </div>
  )
}

export default Login