import { useQuery } from '@tanstack/react-query';
import platforms from '@/components/data/platforms';
import type { Platform } from '../entities/Platform';
import ApiClient from '@/services/api-client';
import ms from 'ms';

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ['platforms'],
    queryFn: () => apiClient.getAll().then((data) => data.results),
    staleTime: ms('24h'),
    initialData: platforms,
  });

export default usePlatforms;
