import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SelectOption = ({ label, options, ...props }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select {...props}>
        {options?.map((option, index) => (
          <MenuItem key={index} value={option?.value}>
            {option?.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectOption;
