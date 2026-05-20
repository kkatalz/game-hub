import genres from '@/components/data/genres';
import ApiClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

const apiClient = new ApiClient<Genre>('/genres');

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: ['genres'],
    queryFn: () => apiClient.getAll().then((data) => data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: genres,
  });

export default useGenres;
