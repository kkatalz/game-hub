import type { Game } from '@/hoos/useGames';
import { CardBody, CardRoot, Heading, Image } from '@chakra-ui/react';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <CardRoot borderRadius='5' overflow='hidden'>
      <Image src={game.background_image} alt={game.name} h='196px' />
      <CardBody>
        <Heading
          fontSize='xl'
          h='30px'
          overflow='hidden'
          textOverflow='ellipsis'
          whiteSpace='nowrap'
        >
          {game.name}
        </Heading>
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
