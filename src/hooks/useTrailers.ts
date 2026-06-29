import type Trailer from '@/entities/Trailer';
import ApiClient, { type FetchResponse } from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

const useTrailers = (id: string) => {
  const apiClient = new ApiClient<Trailer>(`/games/${id}/movies`);

  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ['trailer', id, 'movies'],
    queryFn: () => apiClient.getAll(),
    staleTime: ms('24h'),
  });
};

export default useTrailers;
