import React, { useState } from "react";
import { 
  Box, TextField, Button, Typography, Container, Paper, 
  Radio, RadioGroup, FormControl, FormControlLabel, FormLabel 
} from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import baseUrl, { customerUrl } from "../utils/baseUrl";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    userName: '',
    userGender: '',
    userEmail: '',
    userPwd: '',
    userPhone: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, name } = e.target;
    if (name === "userGender") {
      setUser(prev => ({ ...prev, userGender: value }));
    } else {
      setUser(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async () => {
    console.log(user);

    try{
      const response = await axios.post(`${customerUrl}/user/save-user`,user)
      console.log(response.data);
      navigate("/login")
    }catch(err){
      console.log(err)
    }

  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, marginTop: 3 }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <FaShoppingCart size={40} color="#1976d2" />
        </Box>
        <Typography variant="h5" align="center" gutterBottom>
          Create Account
        </Typography>
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <TextField label="Full Name" variant="outlined" fullWidth required id="userName" value={user.userName} onChange={handleChange} />

          {/* Gender Selection */}
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row name="userGender" value={user.userGender} onChange={handleChange}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>

          <TextField label="Email" variant="outlined" fullWidth required type="email" id="userEmail" value={user.userEmail} onChange={handleChange} />
          <TextField label="Password" variant="outlined" fullWidth required type="password" id="userPwd" value={user.userPwd} onChange={handleChange} />
          <TextField label="Mobile No" variant="outlined" fullWidth required type="tel" id="userPhone" value={user.userPhone} onChange={handleChange} />

          <Button variant="contained" color="primary" size="large" fullWidth onClick={handleSubmit}>
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Signup;
