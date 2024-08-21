import React, { useEffect, useState,  } from "react"
import { Box, Button, Card, CardContent, CardMedia, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import { Search } from "@mui/icons-material";
import Product from "../components/Product";
import { listCategory } from "../services/ProductService";
import { Link } from "react-router-dom";

const Home = () => {
  
  const[category, setCategroy] = useState([]);

  useEffect(()=>{
    listCategory().then((response)=>{
      setCategroy(response.data);
    }).catch(error=>{
      console.error(error);
    })
  }, [])

  
  
  return (
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
        image={require('../header_img.png')}
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

    <Grid container spacing={1} marginLeft={0} justifyContent='space-around' marginBottom='20px'>
      {category.map((category)=>
        <Grid item  style={{cursor:'pointer' }} key={category.categoryId}>
          <Link to={`/category/${category.categoryId}/${category.categoryName}`} style={{textDecoration:'none', color:'black'}}><Box className="boxContainer" 
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            alignContent={"center"}
            marginTop={"20px"}>
            <img
              src={category.imgUrl}
              className='categoryImage'
              style={{
                borderRadius:'50%',
                width:'100%',
                maxWidth:'150px',
                height:'100%',
                maxHeight:'150px',
                boxShadow:'0 0 10px rgba(0,0,0,0.5)'
              }}
            />
            <Typography variant="subtitle1" align="center" mt={2} className='categoryName'>
              {category.categoryName}
            </Typography>
          </Box></Link>
        </Grid>
      )}
    </Grid>

    <Grid container spacing={0} className='productContainer' justifyContent={'space-between'} marginLeft={'20px'}>
      <Product categoryId={''}/>
    </Grid>
    
    </div>
  )
}

export default Home;
