import React from 'react';
import { useField, type FieldHookConfig } from 'formik';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

interface CustomSelectProps {
  id: string
  label: string
  children: React.ReactNode
};

const CustomSelect: React.FC<CustomSelectProps & FieldHookConfig<string>> = ({
  id,
  label,
  children,
  ...props
}) => {
  const [field, meta] = useField(props);
  const isInvalid = meta.touched && Boolean(meta.error);

  return (
    <Box className='input-box'>
      <FormControl error={isInvalid}>
        <InputLabel id={`${id}-label`}>
          {label}
        </InputLabel>
        <Select
          {...field}
          labelId={`${id}-label`}
          id={id}
          label={label}
        >
          {children}
        </Select>
        {isInvalid && (
          <FormHelperText>
            {meta.error}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
