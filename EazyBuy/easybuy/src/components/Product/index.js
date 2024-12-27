import React from "react";
import { createTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { dummyData } from "../data";
import Cards from "../Cards";

function productCard() {
  const theme = createTheme();
//   const matches = useMediaQuery(theme.breakpoints.down("md"));
  const renderProducts = dummyData.map(product => (
    <Grid  key={dummyData.id}  disply="flex" flexDirection={"column"} alignItems="center"  xs={3}>    
    <Cards product={product}/>
    </Grid>
    ));

  return(
    <>
    <Grid container spacing={1}>
        <Grid container item spacing={4}>
            {renderProducts}
            
        </Grid>
    </Grid>

    </>
  )
}

export default productCard;
