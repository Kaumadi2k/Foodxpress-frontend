import { Box, Card, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const ConfirmRegistration = () => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Get the username passed from the Register component
  const username = location.state?.username || '';

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/confirm', {
        username,
        confirmationCode,
      });
      console.log(response.data);
      alert('User confirmed successfully!');
      
      navigate('/');
    } catch (error: any) {
      console.error(error.response.data);
      alert('Failed to confirm user');
    }
  };
  
  return (
    <form onSubmit={handleConfirm}>
    <div>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'90vh'}
        marginTop={'10px'}
      >
        <Card sx={{margin:'30px', padding:'30px'}}>
          <Typography variant={'h4'} sx={{marginBottom:'20px'}}>Confirm Registration</Typography>
          <Typography variant={'subtitle1'}>Enter the confirmation code sent to your email to complete registration</Typography>
          <TextField fullWidth required label={'Enter confirmation code'} style={{marginTop:'30px'}} value={confirmationCode} onChange={(e)=>setConfirmationCode(e.target.value)}></TextField>
          <Button variant='contained' style={{marginTop:'20px'}} type='submit'>Confirm</Button>
        </Card>
      </Box>
    </div>
    </form>
  )
}

export default ConfirmRegistration