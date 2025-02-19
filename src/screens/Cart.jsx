import React from 'react'
import CartCards from '../components/CartCards'
import { Box, Typography } from '@mui/material'

const Cart = () => {
    return (
        <>
            <Box sx={{ display: 'flex',justifyContent:'center', padding: 2, boxSizing: 'border-box' }}>
                <Box sx={{ display: 'flex',flexGrow:1, boxSizing: 'border-box', boxShadow:10, padding:2,gap:2 }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 0.5, maxHeight: '90vh', overflowY: 'auto' }}>
                        <CartCards />
                        <CartCards />
                        <CartCards />
                        <CartCards />
                        <CartCards />
                        <CartCards />
                    </Box>
                    <div style={{height:'100%', weight:1, background:'#000'}}>|</div>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center', flexGrow: 0.5, background: '#f66', color: '#fff' }}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:3}}>

                            <Box>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 40, textAlign:'center' }}>Total Cost</Typography>
                            </Box>
                            <Box sx={{display:'flex', flexDirection:'column', gap:1}}>
                                <Box sx={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
                                    <Typography sx={{fontSize:20}}>Amount:</Typography><Typography sx={{fontSize:20}} >&#8377; 900</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
                                    <Typography sx={{fontSize:20}}>GST</Typography><Typography sx={{fontSize:20}} >&#8377; 450</Typography>
                                </Box>
                                <hr />
                                <Box sx={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
                                    <Typography sx={{fontSize:20}}>Total Amount:</Typography><Typography sx={{fontSize:20}} >&#8377; 10250</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Cart