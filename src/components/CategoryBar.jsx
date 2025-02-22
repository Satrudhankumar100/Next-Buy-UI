import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';


const CategoryBar = ({searchByCategory}) => {

  const [category, setCategory] = useState([])
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
       console.log(category)
  const GetAllCategory = async()=>{
    try{
      const response= await axios.get(`${baseUrl}/product/all-category`)
    console.log();
      
     if(response.data.data.indexOf("T-Shirt"))
      response.data.data.unshift("T-Shirt")
      setCategory(response.data.data);
    
    }catch(err){
      console.log(err)
    }

  }

  useEffect(()=>{
    GetAllCategory();
  },[])

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {category.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={()=>searchByCategory(text)}>
                <ListItemText primary={text}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
   </Box>
  );

  return (
    <>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f66' }}>
        <div>
          <Button onClick={toggleDrawer(true)} sx={{ color: '#fff', cursor: 'pointer',fontWeight:'bold', paddingX: 4, paddingY: 1, zIndex:0, '&:hover': { border: '1px solid white' } }} >ALL</Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
        {category.filter((data,index)=>index<10).map((data, index) => {

          return (<div onClick={()=>searchByCategory(data)}>

          <Typography key={index}  sx={{ color: '#fff',fontWeight:'bold', cursor: 'pointer', paddingX: 4, paddingY: 1, '&:hover': { border: '1px solid white' } }} >{data}</Typography>
          </div>)
        })}

      </Box>

    </>
  )
}

export default CategoryBar







