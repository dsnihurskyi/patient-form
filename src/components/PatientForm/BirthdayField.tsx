import React, { useCallback, useState } from 'react';
import { useFormikContext } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateField } from '@mui/x-date-pickers/DateField';
import Box from '@mui/material/Box';
import { type PatientFormValues } from '../../global/types';

const BirthdayField: React.FC = () => {
  const {
    values: { birthdayDate },
    touched,
    errors,
    setFieldValue,
    setFieldTouched,
  } = useFormikContext<PatientFormValues>();
  const isInvalid = Boolean(errors.birthdayDate)
    && Boolean(touched.birthdayDate);

  const [tempDate, setTempDate] = useState<Date | null>(birthdayDate);

  const onBlur = useCallback(() => {
    setFieldTouched('birthdayDate', true);
    void setFieldValue('birthdayDate', tempDate, true);
  }, [tempDate]);

  return (
    <Box className='input-box'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateField
          label='Birthday Date'
          color='primary'
          value={tempDate}
          onBlur={onBlur}
          onChange={(date: Date | null) => {
            setTempDate(date);
          }}
          format='dd/MM/yyyy'
          helperText={isInvalid && errors.birthdayDate}
          FormHelperTextProps={{
            error: isInvalid,
          }}
          InputProps={{
            error: isInvalid,
          }}
          InputLabelProps={{
            error: isInvalid,
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default BirthdayField;
