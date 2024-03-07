import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const Input = ({ label, ...props }) => {
  return (
    <Box>
      <Typography>{label}</Typography>
      <TextField variant="outlined" fullWidth {...props} placeholder={label} />
    </Box>
  );
};

export default Input;
