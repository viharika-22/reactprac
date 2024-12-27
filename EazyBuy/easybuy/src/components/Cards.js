import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
// import {product} from './Product'

function Cards({product}) {
  
  return (
    <>
    <Grid  container spacing={12} columns={{ xs: 4, sm: 6, md: 12 }} sx={{ margin:4,}}>
      <Card sx={{ maxWidth: 345,marginLeft:10,bgcolor:'#dfd9ed', height:300,width: 400}}>
      <CardMedia
        component={'img'}
        height="150"
        image={product.thumbnail}
        title= {product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{height:20,width: 500}}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div style={{display:'flex', padding:5, justifyContent:'center', alignproductCards:'center'}}>
        <Tooltip title="Add to Cart"><Button sx={{marginLeft:4}} size="small"><AddShoppingCartIcon/></Button></Tooltip>
        <Tooltip title="Share"><Button sx={{marginLeft:2}} size="small"><ShareIcon/></Button></Tooltip>
        <Tooltip title="Add to Wishlist"><Button sx={{marginLeft:2}} size="small"><FavoriteBorderIcon/></Button></Tooltip>
        </div>
      </CardActions>
    </Card>
    </Grid>
    </>
  )
}

export default Cards

