import CriticScore from '@/components/CriticScore';
import PlatformIconList from '@/components/PlatformIconList';
import type { Game } from '@/hooks/useGames';
import getCroppedImageUrl from '@/services/image-url';
import { Card, Heading, HStack, Image } from '@chakra-ui/react';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        h='196px'
      />
      <Card.Body>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((pp) => pp.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading
          fontSize='xl'
          h='30px'
          overflow='hidden'
          textOverflow='ellipsis'
          whiteSpace='nowrap'
        >
          {game.name}
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
