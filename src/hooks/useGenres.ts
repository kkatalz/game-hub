import genres from '@/components/data/genres';
import type { Genre } from '@/entities/Genre';
import ApiClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

const apiClient = new ApiClient<Genre>('/genres');

const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: ['genres'],
    queryFn: () => apiClient.getAll().then((data) => data.results),
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
