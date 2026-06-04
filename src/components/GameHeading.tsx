import type { GameQuery } from '@/App';
import useGenres from '@/hooks/useGenres';
import usePlatforms from '@/hooks/usePlatforms';
import { Heading } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platformName = usePlatforms().data?.find(
    (p) => p.id === gameQuery.platformId,
  )?.name;

  const genreName = useGenres().data?.find(
    (g) => g.id === gameQuery.genreId,
  )?.name;

  const heading = `${platformName || ''} ${genreName || ''} Games`;

  return <Heading as='h1'>{heading}</Heading>;
};

export default GameHeading;
