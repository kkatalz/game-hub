import { Grid, GridItem } from '@chakra-ui/react';
import './App.css';
import NavBar from '@/components/NavBar';
import GameGrid from '@/components/GameGrid';
function App() {
  return (
    <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav" "main"` }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      {/* <GridItem area='aside' display={{ base: 'none', lg: 'block' }}></GridItem> */}
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
