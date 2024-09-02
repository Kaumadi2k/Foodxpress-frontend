import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { Grid, Button, MenuList, MenuItem, ListItemIcon, ListItemText, IconButton, Typography, Avatar } from "@mui/material";
import { DeleteRounded, ShoppingCart } from "@mui/icons-material";
import Table from "./components/CartTable";
import { useState, useEffect } from "react";
import { listUserCarts, createNewCart } from "./services/cart-service";
import CartModal from "./components/CartModal";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [selectedCart, setSelectedCart] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchCarts = async () => {
      const userId = sessionStorage.getItem("userId");
      const response = await listUserCarts(userId);
      setCarts(response.data);
    };
    fetchCarts();
  }, []);

  const handleCartSelect = (cart) => {
    setSelectedCart(cart);
  };

  const handleClick = () =>{
    setOpenModal(true);
  }

  const handleCreateCart = (newCartName) => {
    console.log(`Creating new cart: ${newCartName}`);
    const userId = sessionStorage.getItem('userId');
    const response = createNewCart(newCartName, userId);
    setOpenModal(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="outlined" onClick={()=>handleClick()}>Create a new cart</Button>
        </Grid>
        <Grid item xs={4} sx={{ borderRadius: '10px', marginTop: '16px', height: '400px', overflowY: 'auto' }}>
          <Typography variant="h5">Your Carts</Typography>
          <MenuList sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
            {carts.map((cart) => (
              <MenuItem 
                key={cart.id} 
                sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
                selected={selectedCart && selectedCart.id === cart.id}
                onClick={() => handleCartSelect(cart)}
              >
                <Avatar sx={{ bgcolor: 'rgba(255,69,0,0.5)', marginRight: '10px' }}>
                  <ShoppingCart />
                </Avatar>
                <ListItemText>{cart.cart_name}</ListItemText>
                <IconButton sx={{ color: "red" }}><DeleteRounded /></IconButton>
              </MenuItem>
            ))}
          </MenuList>
        </Grid>

        <Grid item xs={8} sx={{ backgroundColor: 'rgba(255,69,0,0.1)', borderRadius: '10px', padding: '16px', marginTop: '16px' }}>
          <Typography variant="h5">{selectedCart ? `${selectedCart.cart_name} Cart` : 'Select a Cart'}</Typography>
          {selectedCart && <Table cartItems={selectedCart.cartItemList} />}
        </Grid>
      </Grid>
        <CartModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onCreateCart={handleCreateCart}
        />
    </ThemeProvider>
  );
}

export default Cart;
