import {
  type DoctorSpecialitiesData,
  type DoctorsData,
  type PatientFormValues,
} from '../global/types';

export const getPatientsAge = (
  birthdayDate: Date | null,
): number | null => {
  if (birthdayDate == null || isNaN(birthdayDate.getDay())) {
    return null;
  }

  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();

  if (
    currentDate.getMonth() < birthdayDate.getMonth()
    || (
      currentDate.getMonth() === birthdayDate.getMonth()
      && currentDate.getDate() < birthdayDate.getDate()
    )
  ) {
    age--;
  }

  return age;
};

export const handleDoctorSpecialitiesFiltration = (
  doctorSpeciality: DoctorSpecialitiesData,
  filteringData: Partial<PatientFormValues>,
): boolean => {
  const { params } = doctorSpeciality;
  const {
    birthdayDate = null,
    sex = '',
  } = filteringData;

  if (params == null) {
    return true;
  }

  const minAllowedPatientAge = params.minAge;
  const maxAllowedPatientAge = params.maxAge;
  const patientsAge = getPatientsAge(birthdayDate);

  const isValidByAge = (
    patientsAge === null
    || (minAllowedPatientAge == null && maxAllowedPatientAge == null)
    || (minAllowedPatientAge != null && patientsAge >= minAllowedPatientAge)
    || (maxAllowedPatientAge != null && patientsAge <= maxAllowedPatientAge)
  );
  const isValidBySex = (
    sex === ''
    || params.gender == null
    || sex.toLowerCase() === params.gender?.toLowerCase()
  );

  return isValidByAge && isValidBySex;
};

interface DoctorFiltrationData extends Partial<PatientFormValues> {
  availableSpecialitiesIds?: string[]
}

export const handleDoctorsFiltration = (
  doctor: DoctorsData,
  filteringData: DoctorFiltrationData,
): boolean => {
  const {
    birthdayDate = null,
    cityId = '',
    doctorSpecialityId = '',
    availableSpecialitiesIds,
  } = filteringData;
  const patientsAge = getPatientsAge(birthdayDate);
  const hasAvailableSpeciality = Boolean(
    availableSpecialitiesIds?.includes(doctor.specialityId),
  );

  const isValidByCity = cityId === '' || doctor.cityId === cityId;
  const isValidBySpeciality = (
    (doctorSpecialityId === '' && hasAvailableSpeciality)
    || doctor.specialityId === doctorSpecialityId
  );
  const isValidByPatientsAge = (
    patientsAge == null
    || (patientsAge >= 18 && !doctor.isPediatrician)
    || (patientsAge < 18 && doctor.isPediatrician)
  );

  return isValidByCity && isValidBySpeciality && isValidByPatientsAge;
};
