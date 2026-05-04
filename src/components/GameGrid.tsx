import GameCard from '@/components/GameCard';
import GameCardContainer from '@/components/GameCardContainer';
import GameCardSkeleton from '@/components/GameCardSkeleton';
import useGames from '@/hoos/useGames';
import { SimpleGrid } from '@chakra-ui/react';

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
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
    </>
  );
};

export default GameGrid;
