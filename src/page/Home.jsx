import { 
  Box,
  Heading,
  Text,
  Button,
  HStack,
  Input
} from "@chakra-ui/react"
import DrawerExample from "../component/DrawerExample"
 
import { FaSearch} from 'react-icons/fa'
import { useEffect, useState } from "react"
import SearchResults from "../component/SearchResults";
import SearchResults_Skeleton from "../component/SearchResults_Skeleton";
import axios from "axios";

async function searchMeal(query){
  let url = new URL("https://www.themealdb.com/api/json/v1/1/search.php");
  url.searchParams.append('s',query);
  let response = await axios.get(url);
  return response.data;
   
}

function Home() {

  const [query, setQuery] = useState('');
  const [searchParam,setSP] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const [foodResult, setFR] = useState(null);
 
  function handleSearch(){
    if(query === "") return;
    setIsLoading(true);
    searchMeal(query).then((res)=>{
      setFR(res.meals);
      setIsLoading(false);
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
        {isLoading ? 
        <>
          <Text>Please Wait . . .</Text>
          <SearchResults_Skeleton></SearchResults_Skeleton>
        </> 
        :  
        <>
         {foodResult && <SearchResults results={foodResult}></SearchResults >}
        </>}
      </Box>
    </div>
  )
}

export default Home
