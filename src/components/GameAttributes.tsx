import CriticScore from '@/components/CriticScore';
import DefinitionItem from '@/components/DefinitionItem';
import type { Game } from '@/entities/Game';
import { SimpleGrid } from '@chakra-ui/react';

interface GameAttributesProps {
  game: Game;
}

const GameAttributes = ({ game }: GameAttributesProps) => {
  return (
    <SimpleGrid columns={2} marginTop={5} gap={5} as='dl'>
      <DefinitionItem term='Platforms'>
        <ul>
          {game.parent_platforms?.map((pp) => (
            <li key={pp.platform.id}>{pp.platform.name}</li>
          ))}
        </ul>
      </DefinitionItem>
      <DefinitionItem term='Genres'>
        <ul>
          {game.genres?.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </DefinitionItem>
      <DefinitionItem term='Metascore'>
        {game.metacritic ? <CriticScore score={game.metacritic} /> : '-'}
      </DefinitionItem>
      <DefinitionItem term='Publishers'>
        <ul>
          {game.publishers?.map((publisher) => (
            <li key={publisher.id}>{publisher.name}</li>
          ))}
        </ul>
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
