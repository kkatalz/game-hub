import GameGridInfiniteScroll from '@/components/GameGridInfiniteScroll';
import GameHeading from '@/components/GameHeading';
import GenreList from '@/components/GenreList';
import PlatformSelector from '@/components/PlatformSelector';
import SortSelector from '@/components/SortSelector';
import { Grid, GridItem, HStack } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='aside' display={{ base: 'none', lg: 'block' }}>
        <GenreList />
      </GridItem>
      <GridItem area='main' paddingLeft={4}>
        <GameHeading />
        <HStack marginBottom={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGridInfiniteScroll />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
