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
import { useEffect, useState, useRef } from "react"
import SearchResults from "../component/SearchResults";
import SearchResults_Skeleton from "../component/SearchResults_Skeleton";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function searchMeal({queryKey}){
  let url = new URL("https://www.themealdb.com/api/json/v1/1/search.php");
  let [_,queryres] = queryKey;
  url.searchParams.append('s',queryres);
  let {data} = await axios.get(url);
  console.log('fetching data');
  return data;
   
}

function Home() {

  const query = useRef();
  const [searchParam,setSP] = useState(null);
  const [isLoadings,setIsLoading] = useState(false);
  const [foodResult, setFR] = useState(null);
 
  const {isLoading,data,refetch} = useQuery(["foodSearch",searchParam],searchMeal,{
    staleTime:60000,
    refetchOnWindowFocus:false,
    enabled:false
  });

  function handleSearch(){
    if(query === "") return;
    setIsLoading(true);
    searchMeal(query).then((res)=>{
      setFR(res.meals);
      setIsLoading(false);
    });
    setSP("Showing Search Result for:" + query);
  }
  useEffect(()=>{
    refetch();
  },[searchParam]);
  return (
    <div className="App">
      <Box as={'section'} textAlign={'center'} pt={'3em'}>
        <Heading fontWeight={'bold'} color={'white'} bg={'pink.800'} borderRadius={'1em'} p={2} px={10} display={'inline-block'}>Welcome to TheMealDB</Heading>
        <Text my={2}>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</Text>
          <form onSubmit={
            (e)=>{
              e.preventDefault();
                const searchVal = query.current.value;
                setSP(searchVal);
              }
            }>
                <HStack justifyContent={'center'} margin={'2em 0'}>
                    <Input ref={query}  type={"search"} placeholder="I'm looking for a recipe on how to make . . ." maxWidth={'md'} onChange={(e)=> query.current.value = e.target.value}></Input>
                    <Button type={"submit"} leftIcon={<FaSearch/>} size={'md'} variant='solid' colorScheme={"pink"} minWidth={'150px'} > Search </Button>
                </HStack>
          </form>
        {/* <SearchResult results={data} loading={isLoading}></SearchResult> */}
        { data && (
          <SearchResults results={data.meals}></SearchResults >
        )}
      </Box>
    </div>
  )
}
function SearchResult({results,loading}){
  if(loading){
    return (
      <>
        <Text>Please Wait . . .</Text>
        <SearchResults_Skeleton></SearchResults_Skeleton>
      </>  
    )
  }
  console.log(results,'ey');
  if(!results)return <></>;
  return(
     <>
      {results && <SearchResults results={results.meals}></SearchResults >}
     </>
  )
}
export default Home
