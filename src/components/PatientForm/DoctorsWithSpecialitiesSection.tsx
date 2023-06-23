import React, { useMemo } from 'react';
import { useFormikContext } from 'formik';
import { useGetDoctors } from '../../hooks/useGetDoctors';
import { useGetDoctorSpecialities } from '../../hooks/useGetDoctorSpecialities';
import {
  type DoctorSpecialitiesData,
  type DoctorsData,
  type PatientFormValues,
} from '../../global/types';
import {
  handleDoctorSpecialitiesFiltration,
  handleDoctorsFiltration,
} from '../../utils/helpers';
import DoctorSpecialitySelect from './DoctorSpecialitySelect';
import DoctorSelect from './DoctorSelect';

const DoctorsWithSpecialitiesSection: React.FC = () => {
  const { data: doctors } = useGetDoctors();
  const { data: doctorSpecialities } = useGetDoctorSpecialities();
  const {
    values: {
      birthdayDate,
      sex,
      cityId,
      doctorSpecialityId,
    },
  } = useFormikContext<PatientFormValues>();

  const filteredSpecialities = useMemo<DoctorSpecialitiesData[] | undefined>(
    () => {
      const currentFilteringData = {
        sex,
        birthdayDate,
      };

      return doctorSpecialities?.filter(speciality => (
        handleDoctorSpecialitiesFiltration(speciality, currentFilteringData)
      ));
    },
    [doctorSpecialities, sex, birthdayDate],
  );

  const filteredDoctors = useMemo<DoctorsData[] | undefined>(() => {
    const availableSpecialitiesIds = filteredSpecialities?.map(
      speciality => speciality.id,
    );
    const currentFilteringData = {
      cityId,
      doctorSpecialityId,
      birthdayDate,
      availableSpecialitiesIds,
    };

    return doctors?.filter(doctor => (
      handleDoctorsFiltration(doctor, currentFilteringData)
    ));
  }, [
    doctors,
    cityId,
    doctorSpecialityId,
    birthdayDate,
    filteredSpecialities,
    handleDoctorsFiltration,
  ]);

  return (
    <>
      <DoctorSpecialitySelect filteredSpecialities={filteredSpecialities} />
      <DoctorSelect filteredDoctors={filteredDoctors} />
    </>
  );
};

export default DoctorsWithSpecialitiesSection;
