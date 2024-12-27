
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Slider from "./components/Carosel/Slider";
import Products from "./components/Products";
import Product from './components/Product';


const theme = createTheme({
  palette: {
    primary: {
      main:'#7055ac',
    },
    secondary: {
      main:'#c4badb',
    },
  },
  typography:{
    fontFamily:'Montserrat',
    fontWeightRegular: 400,
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
     <Navbar/>
     <Slider />
     <Product/>
     {/* <Cards/> */}
     {/* <Products/> */}
    </ThemeProvider>
    
  );
}

export default App;
