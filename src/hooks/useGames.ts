import ApiClient, { type FetchResponse } from '@/services/api-client';
import useGameQueryStore, { type GameQuery } from '@/store';
import {
  keepPreviousData,
  useInfiniteQuery,
  type InfiniteData,
} from '@tanstack/react-query';
import ms from 'ms';

const apiClient = new ApiClient<Game>('/games');

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  const fetchOnePageOfGames = async ({ pageParam }: { pageParam: number }) => {
    return await apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
    });
  };

  return useInfiniteQuery<
    FetchResponse<Game>,
    Error,
    InfiniteData<FetchResponse<Game>>,
    (string | GameQuery)[],
    number
  >({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => fetchOnePageOfGames({ pageParam }),
    initialPageParam: 1,
    staleTime: ms('24h'), // 24 hours
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
