import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export interface CustomAutocompleteProps{
    value?: string[];
    options?: any;
    variant?: "standard" | "outlined" | "filled";
    size?: "small" | "medium";
    label?: string;
    placeholder?: string
}

const CustomAutocomplete: React.FC<CustomAutocompleteProps> = ({
    value,
    options,
    variant,
    size,
    label,
    placeholder
}) => { 
  return (
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} placeholder={placeholder} variant={variant} />}
    />
  );
}

export default CustomAutocomplete