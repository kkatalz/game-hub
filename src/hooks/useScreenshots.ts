import type Screenshot from '@/entities/Screenshot';
import ApiClient, { type FetchResponse } from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

const useScreenshots = (gameId: string) => {
  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: ['screenshot', gameId],
    queryFn: () => apiClient.getAll(),
    staleTime: ms('24h'),
  });
};

export default useScreenshots;
