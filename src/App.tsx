import { Grid, GridItem, HStack } from '@chakra-ui/react';
import './App.css';
import NavBar from '@/components/NavBar';
import GameGrid from '@/components/GameGrid';
import GenreList from '@/components/GenreList';
import { useState } from 'react';
import type { Genre } from '@/hooks/useGenres';
import type { Platform } from '@/hooks/useGames';
import PlatformSelector from '@/components/PlatformSelector';
import SortSelector from '@/components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "selectors" "main"`,
        lg: `"nav nav" "selectors selectors" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <GridItem area='selectors'>
        <HStack marginBottom={5} paddingLeft={4} >
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>
      </GridItem>
      <GridItem area='aside' display={{ base: 'none', lg: 'block' }}>
        <GenreList
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>
      <GridItem area='main'>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
