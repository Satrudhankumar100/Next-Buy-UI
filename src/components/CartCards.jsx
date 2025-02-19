import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { CiSquarePlus } from 'react-icons/ci'
import { MdDeleteForever } from 'react-icons/md'

const CartCards = () => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 10, alignSelf:'start' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Box>
                        <img style={{ height: 150 }} src="https://img.freepik.com/free-photo/vertical-shot-concentrated-businessman-listening-carefully-with-crossed-hands_181624-29443.jpg" />
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: 36, fontWeight: 'bold' }} >Gray T-Shirt</Typography>
                        <Typography>Gray T-Shirt</Typography>
                        <Typography><span>Rating:</span><span>4</span></Typography>
                        <Typography><span>Price:</span><span>400</span></Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center',gap:2 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer',  fontSize: 40, height: 30, width: 30 }}>
                        <Typography sx={{ fontSize: 40,color:'#f66'  }}>-</Typography>
                    </div>
                    <input type='text' value={1} style={{ width: 48, height: 30,textAlign:'center',border:'1px solid gray' }} />

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', fontSize: 40, height: 30, width: 30 }}>
                        <Typography sx={{ fontSize: 40, color:'#218b3b' }}>+</Typography>
                    </div>
                </Box>

                <Box sx={{ cursor: 'pointer' }}>
                    <MdDeleteForever size={30} color='#f00' />
                </Box>


            </Box>
            <hr/>
        </>
    )
}

export default CartCards