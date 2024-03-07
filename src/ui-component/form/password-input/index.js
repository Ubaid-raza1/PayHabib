import React, { useState } from 'react';
import { FormControl, IconButton, InputAdornment, OutlinedInput, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const PasswordInput = ({ touched, errors, values, handleBlur, handleChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
      <FormControl fullWidth error={Boolean(touched.password && errors.password)}>
        <OutlinedInput
          id="outlined-adornment-password-login"
          type={showPassword ? 'text' : 'password'}
          value={values.password}
          placeholder={placeholder}
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                size="large"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          inputProps={{}}
        />
        {touched.password && errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </FormControl>
    </div>
  );
};

export default PasswordInput;
