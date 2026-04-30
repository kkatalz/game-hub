import apiClient from '@/services/api-client';
import { List } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games')
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

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
