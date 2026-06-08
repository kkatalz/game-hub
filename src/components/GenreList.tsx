import useGenres from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import useGameQueryStore from '@/store';
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from '@chakra-ui/react';

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  
  if (error) return null;
  if (isLoading) return <Spinner marginLeft={5} />;
  return (
    <>
      <Heading fontSize='2xl' margin={5}>
        Genres
      </Heading>
      <List.Root listStyle='none'>
        {data?.map((genre) => (
          <List.Item key={genre.id} paddingY='2px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={6}
                src={getCroppedImageUrl(genre.image_background)}
                marginLeft={5}
              />
              <Button
                onClick={() => setGenreId(genre.id)}
                fontSize='md'
                variant='plain'
                _hover={{ textDecoration: 'underline' }}
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                paddingX={2}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
