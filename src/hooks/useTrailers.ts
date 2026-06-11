import ApiClient, { type FetchResponse } from '@/services/api-client';
import { type Trailer } from '@/entities/Trailer';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

const apiClient = new ApiClient<Trailer>('games');

const useTrailers = (id: string) => {
  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ['trailer', id, 'movies'],
    queryFn: () => apiClient.getAllTrailers(id),
    staleTime: ms('24h'),
  });
};

export default useTrailers;
