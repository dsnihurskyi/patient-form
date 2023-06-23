export interface CityData {
  id: string
  name: string
};

export interface DoctorSpecialitiesData {
  id: string
  name: string
  params?: {
    gender?: string
    maxAge?: number
    minAge?: number
  }
};

export interface DoctorsData {
  id: string
  name: string
  surname: string
  specialityId: string
  isPediatrician: boolean
  cityId: string
};

export interface PatientFormValues {
  patientName: string
  birthdayDate: Date | null
  sex: string
  cityId: string
  doctorSpecialityId: string
  doctorId: string
  email: string
  mobile: string
};

export interface Gender {
  value: string
  label: string
};
