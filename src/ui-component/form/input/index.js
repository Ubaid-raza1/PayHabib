import React from 'react';
import TextField from '@mui/material/TextField';

const Input = ({ label, ...props }) => {
  return <TextField label={label} variant="outlined" fullWidth {...props} />;
};

export default Input;
