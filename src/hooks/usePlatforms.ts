import { useQuery } from '@tanstack/react-query';
import platforms from '@/components/data/platforms';
import type { Platform } from '@/hooks/useGames';
import ApiClient from '@/services/api-client';

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ['platforms'],
    queryFn: () => apiClient.getAll().then((data) => data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms,
  });

export default usePlatforms;
