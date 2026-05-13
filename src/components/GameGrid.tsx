import type { GameQuery } from '@/App';
import GameCard from '@/components/GameCard';
import GameCardContainer from '@/components/GameCardContainer';
import GameCardSkeleton from '@/components/GameCardSkeleton';
import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      listStyle='disc'
      padding='10'
      columnGap='5'
      rowGap='8'
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer>
          <GameCard key={game.id} game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
