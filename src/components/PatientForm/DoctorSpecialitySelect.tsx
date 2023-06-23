import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
import MenuItem from '@mui/material/MenuItem';
import {
  type PatientFormValues,
  type DoctorSpecialitiesData,
} from '../../global/types';
import CustomSelect from '../elements/CustomSelect';

interface DoctorSpecialitySelectProps {
  filteredSpecialities?: DoctorSpecialitiesData[]
}

const DoctorSpecialitySelect: React.FC<DoctorSpecialitySelectProps> = ({
  filteredSpecialities,
}) => {
  const {
    values: { doctorSpecialityId },
    setFieldValue,
  } = useFormikContext<PatientFormValues>();

  useEffect(() => {
    if (doctorSpecialityId.length > 0) {
      const currentDoctorSpeciality = filteredSpecialities?.find(speciality => (
        speciality.id === doctorSpecialityId
      ));

      if (currentDoctorSpeciality == null) {
        void setFieldValue('doctorSpecialityId', '', true);
      }
    }
  }, [filteredSpecialities, doctorSpecialityId, setFieldValue]);

  return (
    <CustomSelect
      id='doctorSpecialityId'
      name='doctorSpecialityId'
      label='Doctor Speciality'
    >
      <MenuItem value='' sx={{ color: '#9e9e9e' }}>
        Select Speciality
      </MenuItem>
      {filteredSpecialities?.map(speciality => (
        <MenuItem key={speciality.id} value={speciality.id}>
          {speciality.name}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

export default DoctorSpecialitySelect;
