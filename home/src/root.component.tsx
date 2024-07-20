import React from "react"
import { Box, Button, Card, CardContent, CardMedia, Grid, InputAdornment, TextField, ThemeProvider, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import theme from "./theme";
import Product from "./components/Product";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
    <div className='homeContent'>
    <Card sx={{display:'flex',padding:2,boxShadow:'none'}}>
      <Box sx={{display:'flex', flexDirection:'column', bgcolor:'primary.main', borderTopLeftRadius:8, borderBottomLeftRadius:8}}>
        <CardContent sx={{flex:'1 0 auto'}}>
          <Typography variant='h3' gutterBottom color='secondary'>Welcome to FoodXpress</Typography>
          <Typography variant='h5' gutterBottom color='secondary'>Discover Delicousness at your fingertips.</Typography>
          <Typography variant='subtitle1' gutterBottom color='secondary'>Whether you're craving a gourmet meal, a quick bite, or something in between, FoodXpress brings your favorite dishes from top local restaurants right to you. Enjoy a seamless and delightful food ordering experience with just a few clicks.</Typography>
          <Button variant='outlined' color='secondary'>Register Now</Button>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        style={{borderTopRightRadius:8, borderBottomRightRadius:8}}
        sx={{width:700}}
        image={require('./header_img.png')}
        alt='header image'/>
    </Card>

    <Grid container spacing={0} style={{marginLeft:'20px',marginBottom:'20px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <Typography variant='h5' align='center' color='orangered'>Shop by Categories</Typography>
      <Grid item style={{display:'flex',alignItems:'center'}}>
        <TextField fullWidth
            id="filled-search"
            label="Search Food Products"
            type="search"
            variant="outlined"
            style={{width:'400px',marginRight:'30px'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
        />
      </Grid>
    </Grid>

    <Grid container spacing={0} className='productContainer'>
      <Product />
    </Grid>
    
    </div>
    </ThemeProvider>
  )
}

export default Home;
