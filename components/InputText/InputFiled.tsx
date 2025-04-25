import React from 'react';
import { FormControl, SxProps, TextField, Theme } from '@mui/material';

export interface InputFiledProps {
  label?: string;
  placeholder?: string;
  sx?: SxProps<Theme>;
  variant?: 'outlined' | 'filled' | 'standard'; 
  size?: 'small' | 'medium';
  type?: string;
  helperText?: React.ReactNode;
  error?: boolean;
  value?: string;
  onChange?: any;
}

const InputFiled = React.forwardRef<HTMLInputElement, InputFiledProps>(
  ({ label, placeholder, sx, size = 'medium', variant = 'outlined', type = 'text', helperText, error, value, onChange, ...rest }, ref) => {
    return (
      <FormControl fullWidth sx={{'& .MuiFormHelperText-root': {margin: '3px 0 0'}}}>
        <TextField
          label={label}
          placeholder={placeholder || `Enter ${label}`}
          sx={sx}
          size={size}
          variant={variant}
          type={type}
          helperText={helperText}
          error={error}
          inputRef={ref}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </FormControl>
    );
  }
);

InputFiled.displayName = 'InputFiled'; // important for debugging

export default InputFiled;
