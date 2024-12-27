import React, { useEffect, useState } from 'react'
import {Box,styled} from '@mui/material';
import Slide from '@mui/material/Slide';

const messages =[
    "20% off on your first order",
    "Free shipping on purchase above 1499",
    "Festive sale starts now",
]
export const PromotionsContainer = styled(Box)(({theme}) => ({
    display: 'flex',
     justifyContent: 'center', 
     alignitems: 'center',
    overflow: "hidden",
    background:"black",
    fontFamily:'cursive',

}));
function Promtions() {
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setshow] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setshow(false)
        },3000)
        const intervelId = setInterval(()=>{
            setMessageIndex((i) => (i+1) % messages.length);
            setshow(true);
            setTimeout(()=>{
                setshow(false)
            },3000)
        },4000)
        return ()=>{
            clearInterval(intervelId);
        }
    },[]);

  return (
    <>
    <PromotionsContainer>
    <Slide  direction={show ? 'left': 'right'} in={show}>
      <Box display={"flex"} >
        {messages[messageIndex]}
      </Box>
      </Slide>
    </PromotionsContainer>
    </>
  )
}

export default Promtions
