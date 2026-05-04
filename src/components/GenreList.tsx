import useGenres from '@/hoos/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { HStack, Image, List, Text } from '@chakra-ui/react';

const GenreList = () => {
  const { data } = useGenres();

  return (
    <List.Root listStyle='none' paddingLeft={5}>
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
