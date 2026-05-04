import useGenres from '@/hoos/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { HStack, Image, List, Spinner, Text } from '@chakra-ui/react';

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner marginLeft={5} />;
  return (
    <List.Root listStyle='none' marginLeft={5}>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize='md'>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
