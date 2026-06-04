import { Grid, GridItem, HStack } from '@chakra-ui/react';
import './App.css';
import NavBar from '@/components/NavBar';
import GenreList from '@/components/GenreList';
import { useState } from 'react';
import PlatformSelector from '@/components/PlatformSelector';
import SortSelector from '@/components/SortSelector';
import GameHeading from '@/components/GameHeading';
import GameGridInfiniteScroll from '@/components/GameGridInfiniteScroll';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <GridItem area='aside' display={{ base: 'none', lg: 'block' }}>
        <GenreList
          onSelectGenre={(genreId) => setGameQuery({ ...gameQuery, genreId })}
          selectedGenreId={gameQuery.genreId}
        />
      </GridItem>
      <GridItem area='main' paddingLeft={4}>
        <GameHeading gameQuery={gameQuery} />
        <HStack marginBottom={5}>
          <PlatformSelector
            onSelectPlatform={(platformId) =>
              setGameQuery({ ...gameQuery, platformId })
            }
            selectedPlatformId={gameQuery.platformId}
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>
        <GameGridInfiniteScroll gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
