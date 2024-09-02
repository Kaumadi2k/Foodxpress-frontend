import React, { useState } from 'react';
import { Modal, Box, Button, TextField } from '@mui/material';

const CartModal = ({ open, onClose, onCreateCart }) => {
  const [newCartName, setNewCartName] = useState('');

  const handleCreateCart = () => {
    if (newCartName.trim()) {
      onCreateCart(newCartName);
      setNewCartName('');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)', width: 400,
        bgcolor: 'background.paper', borderRadius: '8px',
        boxShadow: 24, p: 4,
      }}>
        <TextField
          fullWidth
          label="New Cart Name"
          value={newCartName}
          onChange={(e) => setNewCartName(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" fullWidth onClick={handleCreateCart}>
          Create New Cart
        </Button>
      </Box>
    </Modal>
  );
};

export default CartModal;
