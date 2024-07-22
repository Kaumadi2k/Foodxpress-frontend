import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { Box, Grid, Card, CardContent, Typography, List, ListItem, IconButton, ListItemAvatar, Avatar, ListItemText} from "@mui/material";
import { Delete, ShoppingCartRounded } from "@mui/icons-material";


const Cart = () => {
  return(
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          margin:'10px',
          height: '100vh',
        }}>
          <Grid container spacing={2}>
            <Grid item>
              <Card>
                <CardContent>
                  <Typography variant='h6'>Your Carts</Typography>
                  <List sx={{display:'flex', flexDirection:'column'}}>
                    <ListItem
                      secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <Delete/>
                      </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <ShoppingCartRounded/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Veggies"
                      />
                    </ListItem>
                    <ListItem
                      secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <Delete/>
                      </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <ShoppingCartRounded/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Snacks"
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item>
              <Card>
                <CardContent>
                  <Typography variant='h5'>Cart Items</Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item>
              <Card>
                <CardContent>
                  <Typography variant='h5'>Total price of the cart</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
    </ThemeProvider>
  )
}

export default Cart;