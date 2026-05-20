import { useQuery } from '@tanstack/react-query';
import type { FetchResponse } from '@/hooks/useData';
import apiClient from '@/services/api-client';
import platforms from '@/components/data/platforms';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');  Do not call the API. Return dummy data instead.
// const usePlatforms = () => ({ data: platforms, error: null });

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
