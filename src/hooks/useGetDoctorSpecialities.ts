import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import { type DoctorSpecialitiesData } from '../global/types';
import { DOCTOR_SPECIALITIES_BASE_URL } from '../consts/api';

const fetchDoctorSpecialities = async(): Promise<DoctorSpecialitiesData[]> => {
  const { data } = await axios.get(DOCTOR_SPECIALITIES_BASE_URL);

  return data;
};

export const useGetDoctorSpecialities = ():
UseQueryResult<DoctorSpecialitiesData[]> => useQuery({
  queryKey: ['doctorSpecialities'],
  queryFn: fetchDoctorSpecialities,
});
