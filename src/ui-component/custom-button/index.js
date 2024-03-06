import React from 'react';
import Button from '@mui/material/Button';

function CustomButton({ onClick, color, variant, children, disabled, ...props }) {
  return (
    <Button onClick={onClick} color={color} variant={variant} disabled={disabled} {...props}>
      {children}
    </Button>
  );
}

export default CustomButton;
