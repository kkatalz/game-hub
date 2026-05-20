import type { GameQuery } from '@/App';
import ApiClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

const apiClient = new ApiClient<Game>('/games');

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const fetchGames = async () => {
    return await apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    });
  };

  return useQuery<Game[], Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => fetchGames().then((data) => data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useGames;
