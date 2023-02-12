import { 
  Box,
  Heading,
  Text,
  Button,
  HStack,
  Input
} from "@chakra-ui/react"
import DrawerExample from "./component/DrawerExample"
 
import { FaSearch} from 'react-icons/fa'
import { useEffect, useState } from "react"
import SearchResults from "./component/SearchResults";
function App() {

  const [query, setQuery] = useState('');
  const [foodResult, setFR] = useState([1,2,3]);
  useEffect(()=>{
    console.log(query);
  },[query]);

  return (
    <div className="App">
      <Box as={'section'} textAlign={'center'} pt={'3em'}>
        <Heading fontWeight={'bold'}>Welcome to TheMealDB</Heading>
        <Text>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</Text>
        <HStack justifyContent={'center'} margin={'2em 0'}>
          <Input placeholder="I'm looking for a recipe on how to make . . ." maxWidth={'md'} onChange={(e)=> setQuery(e.target.value)}></Input>
          <Button leftIcon={<FaSearch/>} variant='solid' colorScheme={"teal"} minWidth={'150px'}> Search </Button>
        </HStack>
        {foodResult && <SearchResults results={foodResult}></SearchResults>}
      </Box>
    </div>
  )
}

export default App
