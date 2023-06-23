import React from 'react';
import { GENDER_LIST } from '../../consts/form';
import { validatePatientSex } from '../../utils/validation';
import CustomSelect from '../elements/CustomSelect';
import { MenuItem } from '@mui/material';

const GenderSelect: React.FC = () => {
  return (
    <CustomSelect
      id='sex'
      name='sex'
      label='Sex'
      validate={validatePatientSex}
    >
      <MenuItem value='' sx={{ color: '#9e9e9e' }}>
        Select Sex
      </MenuItem>
      {GENDER_LIST.map(gender => (
        <MenuItem key={gender.value} value={gender.value}>
          {gender.label}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

export default GenderSelect;
