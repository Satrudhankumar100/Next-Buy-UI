import { Box, Button } from '@mui/material';
import React from 'react';
import '../styles/order_table.css'; // Import the external CSS file

const Order = () => {
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
