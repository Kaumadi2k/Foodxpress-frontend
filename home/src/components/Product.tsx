import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, IconButton} from '@mui/material';
import { listProduct } from '../services/ProductService';;
import { ShoppingCartRounded } from '@mui/icons-material';

const Product = () => {

const [product, setProduct] = useState([]);
useEffect(()=>{
  listProduct().then((response)=>{
    setProduct(response.data);
  }).catch(error=>{
    console.error(error);
  })
}, [])


  return (
    <Grid container spacing={2} justifyContent={'space-between'}>
    {product.map(product =>(
    <Grid item style={{display:'flex',alignItems:'center', border:'2px solid #EC6021', borderRadius:'5px', margin:'4px', paddingLeft:'0px'}}>
    <Card style={{width:'300px',boxShadow:'none'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        width="140"
        image={product.imgUrl}
      />
  
      <CardContent style={{ backgroundColor: '#EC6021', height: '120px',overflow: 'hidden', color:'white'}}>
        <Typography variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography variant="h6" component="p" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          Price: Rs.{product.pricePerUnit}
          <IconButton aria-label='cart' style={{cursor:'poi'}}><ShoppingCartRounded fontSize='large' sx={{color:'black'}}/></IconButton>
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    ))}
    </Grid>
  );
}

export default Product;