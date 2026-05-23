import type { GameQuery } from '@/App';
import GameCard from '@/components/GameCard';
import GameCardContainer from '@/components/GameCardContainer';
import GameCardSkeleton from '@/components/GameCardSkeleton';
import useGames from '@/hooks/useGames';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
  gameQuery: GameQuery;
}

const GameGridInfiniteScroll = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    // isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text ml={2}>{error.message}</Text>;
  return (
    <Box>
      <InfiniteScroll
        dataLength={data?.pages.length || 0}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<Text marginY={2}>Loading...</Text>}
        endMessage={<p style={{ textAlign: 'center' }}>All items loaded.</p>}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          listStyle='disc'
          columnGap='5'
          rowGap='8'
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      {/* {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      )} */}
    </Box>
  );
};

export default GameGridInfiniteScroll;
