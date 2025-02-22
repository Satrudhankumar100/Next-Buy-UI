import React, { useEffect, useState } from 'react'
import CartCards from '../components/CartCards'
import { Box, Button, Typography } from '@mui/material'
import BuyNow from '../components/BuyNow';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';

const Cart = () => {

    const [openBuyBox, setOpenBuyBox] = useState(false);
    const [mycarts, setMyCarts] = useState([]);
    const handleClose = () => {
        setOpenBuyBox(false);
    }

    const getListOfCart = async () => {
        try {
            const response = await axios.get(`${baseUrl}/cart/find-all-cart/${2}`) //add userId
            const data= response.data
            console.log(response.data);
            setMyCarts(data);
           
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getListOfCart();
    },[])
  
    const removeCart = async (cartId)=>{
        try {
            const response = await axios.delete(`${baseUrl}/cart/remove-cart/${cartId}`) //add userId
            console.log(response.data);
            getListOfCart();
        } catch (err) {
            console.log(err)
        }
    }

 
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2, boxSizing: 'border-box' }}>
                <Box sx={{ display: 'flex', flexGrow: 1, boxSizing: 'border-box', boxShadow: 10, padding: 2, gap: 2 }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 0.5, maxHeight: '90vh', overflowY: 'auto' }}>
                        {mycarts.map((data, index) => {
                          
                                
                               return  <CartCards cart={data} removeCart={removeCart} /> 
                            

                        })}

                    </Box>
                    <div style={{ height: '100%', weight: 1, background: '#000' }}>|</div>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 0.5, background: '#f66', color: '#fff' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

                            <Box>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 40, textAlign: 'center' }}>Total Cost</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Box sx={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontSize: 20 }}>Amount:</Typography><Typography sx={{ fontSize: 20 }} >&#8377; 900</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontSize: 20 }}>GST</Typography><Typography sx={{ fontSize: 20 }} >&#8377; 450</Typography>
                                </Box>
                                <hr />
                                <Box sx={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontSize: 20 }}>Total Amount:</Typography><Typography sx={{ fontSize: 20 }} >&#8377; 10250</Typography>
                                </Box>
                            </Box>

                            <Box>
                                <Button variant="contained" color="primary" sx={{ background: '#218b3b' }} size="large" fullWidth onClick={() => setOpenBuyBox(true)} >
                                    Buy Now
                                </Button>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>
            <BuyNow handleClose={handleClose} status={openBuyBox} />
        </>
    )
}

export default Cart