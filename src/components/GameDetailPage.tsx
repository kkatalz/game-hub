import ExpandableText from '@/components/ExpandableText';
import GameAttributes from '@/components/GameAttributes';
import GameScreenshots from '@/components/GameScreenshots';
import GameTrailer from '@/components/GameTrailer';
import useGame from '@/hooks/useGame';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <div>Loading...</div>;
  if (error || !game)
    return <div>Error occurred while fetching game details.</div>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} marginTop={4} gap={4}>
      <Box>
      <Heading>{game.name}</Heading>
      <ExpandableText text={game.description_raw} maxLength={200} />
      <GameAttributes game={game} />
      </Box>
      <Box>

      <GameTrailer />
      <GameScreenshots />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
