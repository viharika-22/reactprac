import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tabs from '@mui/material/Tabs';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import Tab from '@mui/material/Tab';
import { styled, alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import FavoriteIcon from '@mui/icons-material/Favorite';
import Promtions from './Promotions';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const tabNames = ['Women','Men','Kids','Baby','Furniture','Products','Offers','Beauty','Brands','Gifts'];

function Navbar() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [value, setValue] = React.useState(null);
    const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 100,
      marginRight:200,
      width: '80%',
      justifyContent:'center',
      alignItems:'center',
      // [theme.breakpoints.up('sm')]: {
      //   marginLeft: theme.spacing(1),
      //   width: 'auto',
      // },
    }));
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }));
    
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'inherit',
      width: '100%',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      },
    }));
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
      
  return (
    <>
      <AppBar sx={{backgroundColor:"#2a135c", color:"#c4badb", marginBottom:10 }}>
        <Promtions />
    {/* <Typography sx={{bgcolor:"black", textAlign:'center'}}>Your one stop destination to shop all over the world.</Typography> */}
        <Toolbar>
        
        <Typography sx={{fontWeight:"600", fontSize:24 }} >easyBuy</Typography>
        <LocalMallIcon fontSize="large" />
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Product or Brand"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Tooltip title="My Wishlist"><FavoriteIcon fontSize="large"/></Tooltip>
          <Tooltip title="My Cart"><ShoppingCartIcon sx={{marginRight: 2, marginLeft: 2}} fontSize="large"/></Tooltip>
          
        <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu}  sx={{ p: 0 }}>
                <Avatar alt="Karthik Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            
        </Toolbar>
        <Toolbar sx={{bgcolor:'#d4d2d7'}}>
        <Tabs sx={{marginLeft:27, textAlign: 'center', justifyContent:'center'}} value={value} onChange={(e,value)=> setValue(value)} indicatorColor="secondary">
            {tabNames.map((tabName)=>(
              <Tab sx={{ color:"#2a135c"}}label={tabName}/>
            ))}
        </Tabs>
        
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
