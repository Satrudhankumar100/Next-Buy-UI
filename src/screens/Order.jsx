import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../styles/order_table.css'; // Import the external CSS file
import axios from 'axios';
import { orderUrl } from '../utils/baseUrl';
import { getUserId } from '../utils/GetUserId';

const Order = () => {


  const [orders, setOrders] = useState([])

  if (orders.length == 0) {
    return (
      <Box sx={{ background: '#f77', width: '100%', paddingX: 4, paddingY: 2,marginTop:2,marginLeft:2 }}>
        <Typography sx={{ fontSize: 28, color: '#fff' }}>No Order found</Typography>
      </Box>
    )
  }

  const getAllorder = async()=>{

    try{
        const response = await axios.post(`${orderUrl}/order/find-all-order/${getUserId}`)
        console.log(response.data);
    }catch(err){
      console.log(err)
    }

  }

  useEffect(()=>{
    getAllorder();
  })
  return (
    <div className="order-container">
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Transaction ID</th>
            <th>Created At</th>
            <th>Address</th>
            <th>Total Cost</th>
            <th>Payment Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>124568</td>
            <td>adcd1246d2255s2</td>
            <td>12/12/2025 01:00</td>
            <td>Raja Bazar</td>
            <td>₹123,541</td>
            <td className="status-done">Done</td>
            <td>
              <Box className="action-buttons">
                <Button variant="contained" color="primary">Details</Button>
                <Button variant="contained" color="secondary">Download</Button>
              </Box>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;
