import useTrailers from '@/hooks/useTrailers';
import { AspectRatio } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const GameTrailer = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useTrailers(slug!);

  const title = data?.results[0].name || 'Game Trailer';
  const trailerSrc = data?.results[0].data['480'];

  if (isLoading) return <div>Loading...</div>;
  if (error || !data || data.count === 0)
    return <div>Sorry, no trailers available for this game.</div>;

  return (
    <AspectRatio
      maxW='800px'
      ratio={16 / 9}
      mx='auto'
      marginTop='8'
      borderRadius='md'
      overflow='hidden'
    >
      <iframe title={title} src={trailerSrc} allowFullScreen />
    </AspectRatio>
  );
};

export default GameTrailer;
