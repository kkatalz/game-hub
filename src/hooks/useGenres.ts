import genres from '@/components/data/genres';
import type { FetchResponse } from '@/services/api-client';
import apiClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const fetchGenres = async () => {
    return await apiClient
      .get<FetchResponse<Genre>>('/genres')
      .then((response) => response.data.results);
  };

  return useQuery<Genre[], Error>({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: genres,
  });
};
export default useGenres;
