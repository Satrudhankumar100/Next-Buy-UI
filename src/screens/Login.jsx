import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container, Paper } from "@mui/material";
import { FaUserLock } from "react-icons/fa";
import axios from "axios";
import { customerUrl } from "../utils/baseUrl";
import { useNavigate } from "react-router-dom";
import useSignIn from "react-auth-kit/hooks/useSignIn";

const Login = () => {

  const signIn = useSignIn();


  const[user,setUser] = useState({userEmail:'',userPwd:''})
  const navigate = useNavigate();
  const handleSumbit = async ()=>{
      try{
        const response = await axios.post(`${customerUrl}/user/login-user`,user)
        console.log(response.data)
        if(signIn({
          auth: {
              token: 'ey....mA',
              type: 'Bearer'
          },
          userState: response.data.user
      }))
        localStorage.setItem("userId",response.data.user.userId)
        localStorage.setItem("userEmail",response.data.user.userEmail)
        navigate("/order")
      }catch(err){
        console.log(err)
      }
  }

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, marginTop: 3 }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <FaUserLock size={40} color="#1976d2" />
        </Box>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <TextField label="Email" variant="outlined" fullWidth required type="email" value={user.userEmail} onChange={(e)=>setUser(prev=>({...prev,userEmail:e.target.value}))} />
          <TextField label="Password" variant="outlined" fullWidth required type="password" value={user.userPwd} onChange={(e)=>setUser(prev=>({...prev,userPwd:e.target.value}))}/>
          <Button variant="contained" color="primary" size="large" fullWidth onClick={handleSumbit}>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
