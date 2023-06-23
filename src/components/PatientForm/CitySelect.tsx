import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { validatePatientCity } from '../../utils/validation';
import { useGetCities } from '../../hooks/useGetCities';
import CustomSelect from '../elements/CustomSelect';

const CitySelect: React.FC = () => {
  const { data: cities } = useGetCities();

  return (
    <CustomSelect
      id='cityId'
      name='cityId'
      label='City'
      validate={validatePatientCity}
    >
      <MenuItem value='' sx={{ color: '#9e9e9e' }}>
        Select City
      </MenuItem>
      {cities?.map(city => (
        <MenuItem key={city.id} value={city.id}>
          {city.name}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

export default CitySelect;
