import React, { useEffect, useState } from 'react'
import CartCards from '../components/CartCards'
import { Box, Button, Typography } from '@mui/material'
import BuyNow from '../components/BuyNow';
import axios from 'axios';
import baseUrl, { customerUrl, orderUrl } from '../utils/baseUrl';
import { getUserId } from '../utils/GetUserId';

const Cart = () => {

    const [openBuyBox, setOpenBuyBox] = useState(false);
    const [mycarts, setMyCarts] = useState([]);
    const [myAmount, setMyAmount] = useState({ productAmount: 0, gstTax: 0, totalAmount: 0 });
    const [flag, setFlag] = useState(false);
    const [address, setaddress] = useState({
        country: '',
        state: '',
        city: '',
        pincode: ''
        
      });
    
      const [isAddressEdit,setAddressEdit] = useState(false);



    const handleClose = () => {
        setOpenBuyBox(false);
    }

    const getListOfCart = async () => {
        try {
            const response = await axios.get(`${baseUrl}/cart/find-all-cart/${getUserId}`) //add userId
            const data = response.data
            console.log(response.data);
            setMyCarts(data);

        } catch (err) {
            console.log(err)
        }
    }

    const getAmountData = async () => {
        try {
            const response = await axios.get(`${orderUrl}/payment/get-total-prod/${getUserId}`) //add userId
            const data = response.data
            console.log(response.data);
            if (data.length == 0) setMyCarts([])
            else setMyCarts(data);

        } catch (err) {
            console.log(err)
        }
    }

    const handleIncrementByOne = async (cartId) => {
        let index = mycarts.findIndex(data => data.cartId == cartId)
        try {
            const response = await axios.post(`${baseUrl}/cart/update-cart-qnty`, { cartId: cartId, cartQnty: mycarts[index].cartQnty + 1 }) //add userId
            console.log(response.data);
            setFlag(!flag);
        } catch (err) {
            console.log(err)
        }
    }

    const handleDecrementByOne = async (cartId) => {
        let index = mycarts.findIndex(data => data.cartId == cartId)
        if (index != -1 && mycarts[index].cartQnty < 2) return;
        try {
            const response = await axios.post(`${baseUrl}/cart/update-cart-qnty`, { cartId: cartId, cartQnty: mycarts[index].cartQnty - 1 })  //add userId
            console.log(response.data);
            setFlag(!flag);
        } catch (err) {
            console.log(err)
        }
    }

    const handleQntyValue = async (e, cartId) => {
        try {
            const response = await axios.delete(`${baseUrl}/cart/update-cart-qnty`, { cartId: cartId, cartQnty: e.traget.value }) //add userId
            console.log(response.data);
            setFlag(!flag);
        } catch (err) {
            console.log(err)
        }
    }

    const handleProceedToBuy = async ()=>{
        try{
            const response = await axios.get(`${customerUrl}/user/find-addr/${getUserId}`)
            console.log(response.data);
            if(response.data?.length==0){
                 setAddressEdit(true);
                 return
            }
            setAddressEdit(false); 
            setaddress(response.data[response.data.length-1])
    
        }catch(err){
            console.log(err)
           
            
        }
    }
    

    useEffect(() => {
        getListOfCart();
        getAmountData();
    }, [flag])

    const removeCart = async (cartId) => {
        try {
            const response = await axios.delete(`${baseUrl}/cart/remove-cart/${cartId}`) //add userId
            console.log(response.data);
            setFlag(!flag);
        } catch (err) {
            console.log(err)
        }
    }

   

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2, boxSizing: 'border-box' }}>
                <Box sx={{ display: 'flex', flexGrow: 1, boxSizing: 'border-box', boxShadow: 10, padding: 2, gap: 2 }}>
                    {
                        mycarts?.length == 0 ? <Box>No Item Left</Box> :

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 0.5, maxHeight: '90vh', overflowY: 'auto' }}>
                                {
                                mycarts?.map((data, index) => {


                                    return <CartCards cart={data}
                                        removeCart={removeCart}
                                        increment={handleIncrementByOne}
                                        decrement={handleDecrementByOne}
                                        qntyValue={handleQntyValue}
                                    />


                                })}

                            </Box>
                    }
                    <div style={{ height: '100%', weight: 1, background: '#000' }}>|</div>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 0.5, background: '#f66', color: '#fff' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

                            <Box>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 40, textAlign: 'center' }}>Total Cost</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Box sx={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontSize: 20 }}>Amount:</Typography><Typography sx={{ fontSize: 20 }} >&#8377; {myAmount?.productAmount}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontSize: 20 }}>GST</Typography><Typography sx={{ fontSize: 20 }} >&#8377; {myAmount?.gstTax}</Typography>
                                </Box>
                                <hr />
                                <Box sx={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontSize: 20 }}>Total Amount:</Typography><Typography sx={{ fontSize: 20 }} >&#8377; {myAmount?.totalAmount}</Typography>
                                </Box>
                            </Box>

                            <Box>
                                <Button variant="contained" color="primary" sx={{ background: '#218b3b' }} size="large" fullWidth onClick={() => {setOpenBuyBox(true); handleProceedToBuy();}} >
                                   Proceed to Buy Now
                                </Button>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>
            <BuyNow handleClose={handleClose} status={openBuyBox} address={address} isAddressEdit={isAddressEdit} setAddressEdit={setAddressEdit} setaddress={setaddress} />
        </>
    )
}

export default Cart