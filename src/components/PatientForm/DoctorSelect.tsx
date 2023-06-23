import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
import MenuItem from '@mui/material/MenuItem';
import { validateDoctor } from '../../utils/validation';
import { type DoctorsData, type PatientFormValues } from '../../global/types';
import CustomSelect from '../elements/CustomSelect';

interface DoctorSelectProps {
  filteredDoctors?: DoctorsData[]
}

const DoctorSelect: React.FC<DoctorSelectProps> = ({ filteredDoctors }) => {
  const {
    values: {
      doctorId,
      cityId,
      doctorSpecialityId,
    },
    setFieldValue,
  } = useFormikContext<PatientFormValues>();

  useEffect(() => {
    if (
      doctorId.length > 0
      && (cityId === '' || doctorSpecialityId === '')
    ) {
      const currentDoctor = filteredDoctors?.find(doctor => (
        doctor.id === doctorId
      ));

      if (currentDoctor != null && cityId === '') {
        void setFieldValue('cityId', currentDoctor?.cityId, true);
      }

      if (currentDoctor != null && doctorSpecialityId === '') {
        void setFieldValue(
          'doctorSpecialityId',
          currentDoctor?.specialityId,
          true,
        );
      }
    }
  }, [doctorId, setFieldValue]);

  useEffect(() => {
    if (doctorId.length > 0) {
      const currentDoctor = filteredDoctors?.find(doctor => (
        doctor.id === doctorId
      ));

      if (currentDoctor == null) {
        void setFieldValue('doctorId', '');
      }
    }
  }, [filteredDoctors, setFieldValue]);

  return (
    <CustomSelect
      id='doctorId'
      name='doctorId'
      label='Doctor'
      validate={validateDoctor}
    >
      <MenuItem value='' sx={{ color: '#9e9e9e' }}>
        Select Doctor
      </MenuItem>
      {filteredDoctors?.map(doctor => (
        <MenuItem key={doctor.id} value={doctor.id}>
          {`${doctor.name} ${doctor.surname}`}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

export default DoctorSelect;
