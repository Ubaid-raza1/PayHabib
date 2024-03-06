import React from 'react';
import { TextField } from '@mui/material';

const Textarea = ({ label, ...props }) => {
  return <TextField multiline rows={4} label={label} variant="outlined" fullWidth {...props} />;
};

export default Textarea;
