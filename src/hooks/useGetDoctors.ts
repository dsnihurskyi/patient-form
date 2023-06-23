import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import { type DoctorsData } from '../global/types';
import { DOCTORS_BASE_URL } from '../consts/api';

const fetchDoctors = async(): Promise<DoctorsData[]> => {
  const { data } = await axios.get(DOCTORS_BASE_URL);

  return data;
};

export const useGetDoctors = (): UseQueryResult<DoctorsData[]> => useQuery({
  queryKey: ['doctors'],
  queryFn: fetchDoctors,
});
