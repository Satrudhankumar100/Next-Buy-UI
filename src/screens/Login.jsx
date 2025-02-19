import React from "react";
import { Box, TextField, Button, Typography, Container, Paper } from "@mui/material";
import { FaUserLock } from "react-icons/fa";

const Login = () => {
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
          <TextField label="Email" variant="outlined" fullWidth required type="email" />
          <TextField label="Password" variant="outlined" fullWidth required type="password" />
          <Button variant="contained" color="primary" size="large" fullWidth>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
