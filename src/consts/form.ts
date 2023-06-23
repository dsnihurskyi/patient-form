import { type Gender, type PatientFormValues } from '../global/types';

export const INITIAL_PATIENT_FORM_VALUES: PatientFormValues = {
  patientName: '',
  birthdayDate: null,
  sex: '',
  cityId: '',
  doctorSpecialityId: '',
  doctorId: '',
  email: '',
  mobile: '',
};

export const GENDER_LIST: Gender[] = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
];
