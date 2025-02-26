import { Box, Button, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import '../styles/order_table.css'; // Import the external CSS file
import axios from 'axios';
import { orderUrl } from '../utils/baseUrl';
import { getUserId } from '../utils/GetUserId';
import moment from "moment";
import { SerachContext } from '../App';
const Order = () => {

  const { flag, setFlag } = useContext(SerachContext)
  const [orders, setOrders] = useState([])

  
  const getAllorder = async()=>{

    try{
        const response = await axios.get(`${orderUrl}/order/get-all-orders/${getUserId}`)
        console.log(response.data);
        setOrders(response.data);
    }catch(err){
      console.log(err)
    }

  }

  useEffect(()=>{
    getAllorder();
    setFlag(!flag);
  },[])

  if (orders.length == 0) {
    return (
      <Box sx={{ background: '#f77', width: '100%', paddingX: 4, paddingY: 2,marginTop:2,marginLeft:2 }}>
        <Typography sx={{ fontSize: 28, color: '#fff' }}>No Order found</Typography>
      </Box>
    )
  }





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
          {orders.map((order,index)=>{
            return (
              <tr key={index}>
              <td>{order?.ordId}</td>
              <td>{order?.payment?.payTnxId}</td>
              <td>{moment(order?.ordCreatedDate).format('llll')}</td>
              <td>{order?.ordAddress}</td>
              <td>₹{order?.payment?.totalAmount}</td>
              <td className="status-done">{order?.payment?.payStatus?"Yes":"No"}</td>
              <td>
                <Box className="action-buttons">
                  <Button variant="contained" color="primary">Details</Button>
                  <Button variant="contained" color="secondary">Download</Button>
                </Box>
              </td>
            </tr>
            );
          })}
        
        </tbody>
      </table>
    </div>
  );
};

export default Order;
