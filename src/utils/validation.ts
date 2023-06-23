const NAME_VALIDATION_REGEX = /^[a-zA-Z\s]+$/;
const EMAIL_VALIDATION_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_VALIDATION_REGEX = (
  /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
);
const CURRENT_YEAR = new Date().getFullYear();

export const validatePatientName = (patientName: string): string => {
  if (patientName === '') {
    return 'Name is required';
  }

  if (!NAME_VALIDATION_REGEX.test(patientName)) {
    return 'Name should not contain numbers';
  }

  return '';
};

export const validatePatientBirthdayDate = (
  birthdayDate: Date | null,
): string => {
  if (birthdayDate === null) {
    return 'Birthday Date is required';
  }

  if (isNaN(birthdayDate.getDay())) {
    return birthdayDate.toString();
  }

  const year = birthdayDate.getFullYear();

  if (year < 1900) {
    return 'You\'re too old for this stuff';
  }

  if (year > CURRENT_YEAR) {
    return 'Hi, Terminator';
  }

  return '';
};

export const validatePatientSex = (sex: string): string => {
  return sex === '' ? 'Sex is required' : '';
};

export const validatePatientCity = (cityId: string): string => {
  return cityId === '' ? 'City is required' : '';
};

export const validateDoctor = (doctorId: string): string => {
  return doctorId === '' ? 'Doctor is required' : '';
};

export const validatePatientEmail = (
  email: string,
  mobile: string,
): string => {
  if (email === '' && mobile === '') {
    return 'Email or Mobile number is required';
  }

  if (email === '') {
    return email;
  }

  if (!EMAIL_VALIDATION_REGEX.test(email)) {
    return 'Email should be valid';
  }

  return '';
};

export const validatePatientMobile = (
  email: string,
  mobile: string,
): string => {
  if (email === '' && mobile === '') {
    return 'Email or Mobile number is required';
  }

  if (mobile === '') {
    return mobile;
  }

  if (!MOBILE_VALIDATION_REGEX.test(mobile)) {
    return 'Mobile number should be valid';
  }

  return '';
};
