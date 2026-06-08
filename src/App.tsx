import GameGridInfiniteScroll from '@/components/GameGridInfiniteScroll';
import GameHeading from '@/components/GameHeading';
import GenreList from '@/components/GenreList';
import NavBar from '@/components/NavBar';
import PlatformSelector from '@/components/PlatformSelector';
import SortSelector from '@/components/SortSelector';
import { Grid, GridItem, HStack } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
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
}

export default App;
