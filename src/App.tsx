import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
export interface gameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setgameQuery] = useState<gameQuery>({} as gameQuery);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setgameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setgameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={10}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setgameQuery({ ...gameQuery, platform })
                }
              />
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectedSortOrder={(sortOrder) =>
                setgameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
