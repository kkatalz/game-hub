import useGenres, { type Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from '@chakra-ui/react';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner marginLeft={5} />;
  return (
    <>
      <Heading fontSize='2xl' margin={5}>
        Genres
      </Heading>
      <List.Root listStyle='none'>
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY='2px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={6}
                src={getCroppedImageUrl(genre.image_background)}
                marginLeft={5}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize='md'
                variant='plain'
                _hover={{ textDecoration: 'underline' }}
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
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
