import { useParams } from 'react-router-dom'
import { Grid, Box, BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';
import Product from '../components/Product';
import { useEffect, useState } from 'react';
import { listCategory } from '../services/ProductService';

const Category = () => {
  const categoryId = useParams().categoryId;
  const categoryName = useParams().categoryName;

  const [category, setCategory] = useState([]);
  useEffect(()=>{
    listCategory().then((response)=>{
      setCategory(response.data);
    }).catch(error=>{
      console.error(error);
    })
  }, [])
  
  return (
    <div>
      <Grid container spacing={0} className='productContainer'  margin={'20px'} >
        <Product categoryId={categoryId}/>
      </Grid>
    
      <Box sx={{ width: '100%'}}>
      <BottomNavigation
        showLabels
        value={category}
        onChange={(category, newValue) => {
          setCategory(newValue);
        }}
      >
        {category.map((category) => (
          <BottomNavigationAction label={category.categoryName} value={category.id} />
        ))}
      </BottomNavigation>
    </Box>
    
    </div>
  )
}

export default Category;