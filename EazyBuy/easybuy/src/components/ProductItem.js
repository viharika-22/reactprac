import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Grid from '@mui/material/Grid';

function ProductItem() {

    const CardWrapper = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column'
      }));

  return (
    <>po
    {/* <Grid container spacing={12} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ margin:3,}}>
    <Card sx={{marginLeft:10, maxWidth: 345, marginBottom: 3,marginTop: 1,bgcolor:'#dfd9ed'}}>
      <CardMedia
        component={'img'}
        height="250"
        image="https://images.unsplash.com/photo-1712603019382-0add49382363?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Golden Dress"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dress
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <div style={{display:'flex', padding:5, justifyContent:'center', alignItems:'center'}}>
        <Button size="small"><AddShoppingCartIcon/></Button>
        <Button size="small"><ShareIcon/></Button>
        <Button size="small"><FavoriteBorderIcon/></Button>
        </div>
      </CardActions>
    </Card>
    </Grid> */}
     
    </>
  )
}

export default ProductItem
