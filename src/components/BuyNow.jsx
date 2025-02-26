import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CgClose } from 'react-icons/cg';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import AddAddress from './AddAddress';
import axios from 'axios';
import { customerUrl } from '../utils/baseUrl';
import { FaRegEdit } from 'react-icons/fa';
import { getUserId } from '../utils/GetUserId';
import { getUserEmail } from '../utils/GetUserId';
import RazorpayConfig from './RazorpayConfig';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:'flex',
    flexDirection:'column',
    gap:2
};

const BuyNow = ({ handleClose, status,address,isAddressEdit, setAddressEdit,setaddress }) => {





  const handleChange = (e) => {
    const { id, value } = e.target;
          setaddress(prev => ({ ...prev, [id]: value }));
      };

    const handleSaveAddress = async ()=>{
         try{
            const response = await axios.post(`${customerUrl}/user/save-addr/${getUserId}`,address) //add user id
            console.log(response.data)
            setAddressEdit(false);
            window.location.reload();
         }catch(err){
            console.log(err)
         }
    }

   


    return (
        <>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={status}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={status}>
                    
                    <Box sx={style}>
                      {  isAddressEdit?
                             <AddAddress user={address} handleChange={handleChange} handleClose={handleClose} handleSaveAddress ={handleSaveAddress} />:
                             <>
                             <Box sx={{ display: 'flex', gap: 2 }}>
                                 <Typography>Email id:</Typography>
                                 <Typography sx={{ fontSize: 14 }}>{getUserEmail}</Typography>
                             </Box>
                             <Box>
                                 <Typography>Delivery Address:</Typography>
                             </Box>
                             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Typography>{address?.city}-{address?.pincode}, {address?.state}, {address?.country}</Typography>  
                                <Button onClick={()=>setAddressEdit(true)}><FaRegEdit /></Button>               
                             </Box>
                             <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                 <Box>
                                     <Button variant="outlined" size="large" fullWidth onClick={handleClose} >
                                         Close
                                     </Button>
                                 </Box>
                                 <Box>
                                    
                                         <RazorpayConfig />
                                   
                                 </Box>
                             </Box>
                         </>
                      }
                    </Box>

                </Fade>
            </Modal>
        </>
    );
}

export default BuyNow;