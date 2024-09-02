import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, Paper, TableBody, Avatar } from '@mui/material';

const CartTable = ({ cartItems }) => {
  return (
    <TableContainer component={Paper} sx={{marginTop:'20px'}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Details</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems && cartItems.map((item) => (
            <TableRow key={item.productId}>
              <TableCell component="th" scope="row">
                <Avatar alt={item.productName} src={item.productImage} sx={{ marginRight: 2 }} />
                {item.productName}
              </TableCell>
              <TableCell align="right">${item.productPrice}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">${(item.productPrice * item.quantity).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
