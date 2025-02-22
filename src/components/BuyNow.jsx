import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CgClose } from 'react-icons/cg';
import { TextField } from '@mui/material';
import { useState } from 'react';
import AddAddress from './AddAddress';

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

const BuyNow = ({ handleClose, status }) => {

 const [user, setUser] = useState({
    country: '',
    state: '',
    city: '',
    pincode: ''
    
  });

  const [isAddressEdit,setAddressEdit] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
          setUser(prev => ({ ...prev, [id]: value }));
      };

   


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
                             <AddAddress user={user} handleChange={handleChange} handleClose={handleClose} />:
                             <>
                             <Box sx={{ display: 'flex', gap: 2 }}>
                                 <Typography>Email id:</Typography>
                                 <Typography sx={{ fontSize: 14 }}>abc@gmail.com</Typography>
                             </Box>
                             <Box>
                                 <Typography>Delivery Address:</Typography>
                             </Box>
                             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Typography>Patna-8000014, Bihar, India</Typography>                 
                             </Box>
                             <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                 <Box>
                                     <Button variant="outlined" size="large" fullWidth onClick={handleClose} >
                                         Close
                                     </Button>
                                 </Box>
                                 <Box>
                                     <Button variant="contained" color="primary" sx={{ background: '#218b3b' }} size="large" fullWidth onClick={() => setOpenBuyBox(true)} >
                                         Buy
                                     </Button>
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