import React from 'react';
import { useField, type FieldHookConfig } from 'formik';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface CustomInputProps {
  label: string
};

const CustomInput: React.FC<CustomInputProps & FieldHookConfig<string>> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props);
  const isInvalid = meta.touched && Boolean(meta.error);

  return (
    <Box className='input-box'>
      <TextField
        {...field}
        fullWidth
        label={label}
        error={isInvalid}
        helperText={isInvalid && meta.error}
      />
    </Box>
  );
};

export default CustomInput;
