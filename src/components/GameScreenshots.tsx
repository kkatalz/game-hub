import useScreenshots from '@/hooks/useScreenshots';
import { Image, SimpleGrid } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const GameScreenshots = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useScreenshots(slug!);

  if (isLoading) return <div>Loading...</div>;
  if (error || !data || data.count === 0)
    return <div>Sorry, no screenshots available for this game.</div>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} marginTop={4} gap={2}>
      {data.results.map((screenshot) => (
        <Image
          key={screenshot.id}
          src={screenshot.image}
          alt={`Screenshot for ${slug}`}
          borderRadius="md"
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
