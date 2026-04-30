import useGames from '@/hoos/useGames';
import { List } from '@chakra-ui/react';

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <List.Root listStyle='disc' pl='40' pt='5'>
      {error && <p>{error}</p>}
      {games.map((game) => (
        <List.Item key={game.id}>{game.name}</List.Item>
      ))}
    </List.Root>
  );
};

export default GameGrid;
