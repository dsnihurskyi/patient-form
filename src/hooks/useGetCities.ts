import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import { type CityData } from '../global/types';
import { CITIES_BASE_URL } from '../consts/api';

const fetchCities = async(): Promise<CityData[]> => {
  const { data } = await axios.get(CITIES_BASE_URL);

  return data;
};

export const useGetCities = (): UseQueryResult<CityData[]> => useQuery({
  queryKey: ['cities'],
  queryFn: fetchCities,
});
