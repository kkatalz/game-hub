import CriticScore from '@/components/CriticScore';
import Emoji from '@/components/Emoji';
import PlatformIconList from '@/components/PlatformIconList';
import type { Game } from '@/entities/Game';
import getCroppedImageUrl from '@/services/image-url';
import { Card, Heading, HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root>
      <Link to={`/games/${game.slug}`}>
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
            {game.name} <Emoji rating={game.rating_top} />
          </Heading>
        </Card.Body>
      </Link>
    </Card.Root>
  );
};

export default GameCard;
