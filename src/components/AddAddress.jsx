import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const AddAddress = ({ user, handleChange, handleClose }) => {
    return (
        <>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Typography>Email id:</Typography>
                <Typography sx={{ fontSize: 14 }}>abc@gmail.com</Typography>
            </Box>
            <Box>
                <Typography>Add Delivery Address:</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <TextField label="Contry" variant="outlined" size='small' fullWidth required id="country" value={user.country} onChange={handleChange} />
                <TextField label="State" variant="outlined" size='small' fullWidth required id="state" value={user.state} onChange={handleChange} />
                <TextField label="City" variant="outlined" size='small' fullWidth required id="city" value={user.city} onChange={handleChange} />
                <TextField label="Pincode" variant="outlined" size='small' fullWidth required id="pincode" value={user.pincode} onChange={handleChange} />

            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Button variant="outlined" size="large" fullWidth onClick={handleClose} >
                        Close
                    </Button>
                </Box>
                <Box>
                    <Button variant="contained" color="primary" sx={{ background: '#218b3b' }} size="large" fullWidth onClick={() => setOpenBuyBox(true)} >
                        Save
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default AddAddress