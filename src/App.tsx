import { Grid, GridItem } from '@chakra-ui/react';
import './App.css';
function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area='nav'></GridItem>
      <GridItem area='aside' bg='gold' display={{ base: 'none', lg: 'block' }}>
        Aside
      </GridItem>
      <GridItem area='main' bg='dodgerblue'>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
