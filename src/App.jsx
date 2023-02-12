import { 
  Box,
  Heading,
  Text
} from "@chakra-ui/react"
 
function App() {

  return (
    <div className="App">
      <Box as={'section'} textAlign={'center'}>
        <Heading fontWeight={'bold'}>Welcome to TheMealDB</Heading>
        <Text>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</Text>
      </Box>
    </div>
  )
}

export default App
