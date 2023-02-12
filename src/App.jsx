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
import axios from "axios";

async function searchMeal(query){
  let url = new URL("https://www.themealdb.com/api/json/v1/1/search.php");
  url.searchParams.append('s',query);
  let response = await axios.get(url);
  return response.data;
   
}

function App() {

  const [query, setQuery] = useState('');
  const [searchParam,setSP] = useState(null);
  const [foodResult, setFR] = useState(null);
  useEffect(()=>{
    
  },[query]);
  
  function handleSearch(){
    if(query === "") return;
    searchMeal(query).then((res)=>{
      console.log(res);
      setFR(res.meals);
    });
    setSP("Showing Search Result for:" + query);
  }
  return (
    <div className="App">
      <Box as={'section'} textAlign={'center'} pt={'3em'}>
        <Heading fontWeight={'bold'}>Welcome to TheMealDB</Heading>
        <Text>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</Text>
        <HStack justifyContent={'center'} margin={'2em 0'}>
          <Input placeholder="I'm looking for a recipe on how to make . . ." maxWidth={'md'} onChange={(e)=> setQuery(e.target.value)}></Input>
          
          <Button leftIcon={<FaSearch/>} size={'sm'} variant='solid' colorScheme={"linkedin"} minWidth={'150px'} onClick={handleSearch}> Search </Button>
        </HStack>
        {searchParam}
        {foodResult && <SearchResults results={foodResult}></SearchResults>}
      </Box>
    </div>
  )
}

export default App
