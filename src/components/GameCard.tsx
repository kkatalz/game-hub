import PlatformIconList from '@/components/PlatformIconList';
import type { Game } from '@/hoos/useGames';
import { Card, Heading, Image } from '@chakra-ui/react';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius='5' overflow='hidden'>
      <Image src={game.background_image} alt={game.name} h='196px' />
      <Card.Body>
        <Heading
          fontSize='xl'
          h='30px'
          overflow='hidden'
          textOverflow='ellipsis'
          whiteSpace='nowrap'
        >
          {game.name}
        </Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((pp) => pp.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
