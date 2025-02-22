import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { CiSquarePlus } from 'react-icons/ci'
import { MdDeleteForever } from 'react-icons/md'

const CartCards = ({ cart, removeCart }) => {
   
    const {cartId,cartQnty,userId,prod} = cart
    
        console.log("cart"+cart)
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 10, alignSelf: 'start' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Box>
                        <img style={{ height: 150 }} src={prod.image} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: 36, fontWeight: 'bold' }} >{prod.name}</Typography>
                        <Typography>{prod.category}</Typography>
                        <Typography><span>Rating:</span><span>{prod.rating}</span></Typography>
                        <Typography><span>Price:</span><span>{prod.prodPrice}</span></Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 2 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', fontSize: 40, height: 30, width: 30 }}>
                        <Typography sx={{ fontSize: 40, color: '#f66' }}>-</Typography>
                    </div>
                    <input type='text' value={cartQnty}  style={{ width: 48, height: 30, textAlign: 'center', border: '1px solid gray' }} />

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', fontSize: 40, height: 30, width: 30 }}>
                        <Typography sx={{ fontSize: 40, color: '#218b3b' }}>+</Typography>
                    </div>
                </Box>

                <Box sx={{ cursor: 'pointer' }}>
                    <Button onClick={()=>removeCart(cartId)}>
                        <MdDeleteForever size={30} color='#f00' />
                    </Button>
                </Box>


            </Box>
            <hr />
        </>
    )
}

export default CartCards