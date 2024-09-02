import { Box, Card, CardContent, CardMedia, TextField, Typography, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/register', {
        username,
        password,
      });
      console.log(response.data);
      navigate('/confirmRegistration', { state: { username } });
      alert('User registered successfully! Enter the confirmation code sent to your email to complete registration');
    } catch (error: any) {
      console.error(error.response.data);
      alert('Failed to register user');
    }
  };

  
  return (
    <form onSubmit={handleRegister}>
    <div>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'90vh'} marginTop={'10px'}>
        <Card style={{display:'flex', flexDirection:'row', margin:'30px'}}>
          <CardMedia
            component={'img'}
            image={require('./register.jpg')}
            style={{flex:1}}
            sx={{width:'30%'}}
          ></CardMedia>
          <CardContent style={{flex:1}}>
            <img src={require('./logo2.png')} style={{width:'20%'}} />
            <Typography variant={'h4'} sx={{marginBottom:'20px'}}>Create Your Account</Typography>
            <div style={{display:'flex', flexDirection:'row'}}>
              <Typography variant={'subtitle1'}>Already have an account?</Typography>
              <Link to={'/'} style={{textDecoration:'none'}}><Typography variant={'subtitle1'} sx={{marginLeft:'10px', color:'orangered'}}><strong>Login</strong></Typography></Link>
            </div>
            <div>
              <TextField
                fullWidth
                required
                value={username}
                label={'Enter your email'}
                style={{marginTop:'30px'}}
                variant='outlined'
                onChange={(e) => setUsername(e.target.value)}
              ></TextField>
              <TextField
                fullWidth
                required
                value={password}
                type='password'
                label={'Enter your password'}
                style={{marginTop:'30px'}}
                variant='outlined'
                onChange={(e) => setPassword(e.target.value)}
                >
              </TextField>
            </div>
            <Button variant='contained' style={{marginTop:'20px'}}type='submit'>Register</Button>
          </CardContent>
        </Card>
      </Box>
      <a href='/'><Button>Back</Button></a>
    </div>
    </form>
  )
}

export default Register