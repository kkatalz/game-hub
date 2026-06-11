import ExpandableText from '@/components/ExpandableText';
import useGame from '@/hooks/useGame';
import { Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <div>Loading...</div>;
  if (error || !game)
    return <div>Error occurred while fetching game details.</div>;

  return (
    <div>
      <Heading>{game.name}</Heading>
      <ExpandableText text={game.description_raw} maxLength={200} />
    </div>
  );
};

export default GameDetailPage;
