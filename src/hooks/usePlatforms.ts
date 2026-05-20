import { useQuery } from '@tanstack/react-query';
import type { FetchResponse } from '@/services/api-client';
import apiClient from '@/services/api-client';
import platforms from '@/components/data/platforms';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const fetchPlatforms = async () => {
    return await apiClient
      .get<FetchResponse<Platform>>('/platforms/lists/parents')
      .then((response) => response.data.results);
  };

  return useQuery<Platform[], Error>({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms,
  });
};

export default usePlatforms;
