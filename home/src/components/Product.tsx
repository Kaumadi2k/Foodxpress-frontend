import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, IconButton } from '@mui/material';
import { ShoppingCartRounded } from '@mui/icons-material';
import { createNewCart, listProduct, listProductByCategory, listUserCarts, addProductToCart } from '../services/ProductService';
import CartModal from './CartModal';

const Product = ({ categoryId }) => {
  const [product, setProduct] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [carts, setCarts] = useState([]); // Assuming you have a way to fetch carts

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = categoryId 
          ? await listProductByCategory(categoryId) 
          : await listProduct();
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  useEffect(()=> {
    const fetchCarts = async () => {
      const userId = sessionStorage.getItem("userId");
      const response = await listUserCarts(userId);
      setCarts(response.data);
    };
    fetchCarts();
  },[]);

  const handleCartClick = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleAddToCart = (cartId) => {
    console.log(`Adding ${selectedProduct.id} to cart ID ${cartId}`);
    const response = addProductToCart(cartId, selectedProduct.id);
    setOpenModal(false);
  };

  const handleCreateCart = (newCartName) => {
    console.log(`Creating new cart: ${newCartName}`);
    const userId = sessionStorage.getItem('userId');
    const response = createNewCart(newCartName, userId);
    // Then add the product to this new cart
    setOpenModal(false);
  };

  return (
    <>
      <Grid container spacing={2} justifyContent={'space-between'} marginTop={'20px'}>
        {product.map((product) => (
          <Grid item key={product.id} style={{ display: 'flex', alignItems: 'center', border: '2px solid #EC6021', borderRadius: '5px', margin: '10px', paddingLeft: '0px' }}>
            <Card style={{ width: '300px', boxShadow: 'none' }}>
              <CardMedia
                component="img"
                alt={product.name}
                height="250"
                width="140"
                image={product.imgUrl}
              />
              <CardContent style={{ backgroundColor: '#EC6021', height: '120px', overflow: 'hidden', color: 'white' }}>
                <Typography variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
                <Typography variant="h6" component="p" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  Price: Rs.{product.pricePerUnit}
                  <IconButton aria-label="cart" onClick={() => handleCartClick(product)}>
                    <ShoppingCartRounded fontSize="large" sx={{ color: 'black' }} />
                  </IconButton>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedProduct && (
        <CartModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          carts={carts}
          onAddToCart={handleAddToCart}
          onCreateCart={handleCreateCart}
        />
      )}
    </>
  );
};

export default Product;
