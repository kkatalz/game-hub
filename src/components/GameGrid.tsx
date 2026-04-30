import GameCard from '@/components/GameCard';
import useGames from '@/hoos/useGames';
import { SimpleGrid } from '@chakra-ui/react';

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        listStyle='disc'
        padding='10'
        columnGap='10'
        rowGap='8'
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
