import { Card, CardBody, SimpleGrid,Flex, CardHeader, Heading, Divider,Box, Text, Table, TableCaption,Button, Thead, Tr, Th,Td, Tbody, CardFooter, Checkbox } from "@chakra-ui/react";
import { useState } from "react";

export default function FoodMain({food}) {
  
  function getIngredients(){
    let res = [];
    for(let i = 0; i < 20;i++){
        let ingredient = food[`strIngredient${i+1}`];
        let measure = food[`strMeasure${i+1}`];
        if(ingredient !== ""){
              res.push({
                ingredient,
                measure
              });
        }else{
            break;
        }
    }
    return res;
  }
  let ingre = getIngredients();
  let actualLink = food.strYoutube.split('=');
  let youtubeLink = `https://www.youtube.com/embed/${actualLink[actualLink.length - 1]}`;
  return (
     <Box p={10}>
         <Flex width={'100%'} gap={'1em'} wrap={{base:'wrap',lg:'nowrap'}} flexShrink={'0.5'}>
            <Card maxW={{base:'initial',xl:'30vw'}} border={'3px solid purple'} p={0} m={0}>
                <CardHeader p2={2} >
                    <Heading>
                        {food.strMeal}
                    </Heading>
                    <Text>{food.strCategory} - {food.strArea}</Text>
                </CardHeader>
                <CardBody pt={0} fontSize={'.8rem'}>
                    Instructions:
                    <p>
                        {food.strInstructions}
                    </p>
                </CardBody>     
                <CardFooter>
                    <Button variant={'solid'} w={'100%'} mx={'0 auto'} colorScheme={'pink'}
                    onClick={()=>{
                        window.open(food.strSource,'_blank');
                    }}>Recipe Source!</Button>    
                </CardFooter>   
            </Card>                
                
            <Card flexGrow={2}  minWidth={'350px'}>
                <CardHeader>
                    <Heading fontWeight={'bold'} fontSize={'1.2rem'} color={'pink.800'}>Watch the Tutorial</Heading>
                </CardHeader>
                <Divider h={'2px'} color={'pink.700'}></Divider>
                <CardBody minW={'30vw'}>
                    <Box shadow={'xl'}>
                        <iframe width="100%" height={'350px'} src={youtubeLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
                    </Box>
                </CardBody>
            </Card>
        </Flex>
        <Divider m={5}></Divider>
        <Box borderRadius={'sm'} border={'3px solid purple'} p={5} >
            <Table colorScheme={'pink'} variant="striped" size={'lg'} >
                <Thead w={'100%'} >
                    <TableCaption fontSize={'1.5rem'} width={'100%'} textAlign={'left'} fontWeight={'600'}>Here's what you need!</TableCaption>
                    <Text px={5}>Click to mark as complete!</Text>
                    <Tr bg={'pink.400'}>
                        <Th>Ingredient</Th>
                        <Th>Measurement</Th> 
                    </Tr>
                </Thead>
                <Tbody fontSize={'.8rem'} >
                    {ingre.map((recipe,index)=>{
                        return (
                           <Ingredient recipe={recipe}   index={index}  />
                        )
                    })}
                </Tbody>
            </Table>
        </Box>
     </Box>
  )
}

function Ingredient({recipe,index}) {
    const [isDone,setIsDone] = useState(false);

    function handleClick(){
        setIsDone((prev) => !prev)
    }
    return (
            <Tr _hover={{cursor:'pointer'}} onClick={handleClick} textDecoration={isDone ? 'line-through' : 'none'} scale={isDone ? '1.2' : '1'} bg={index % 2 === 0 ? 'transparent' : 'pink.100'}>
                <Th>
                    <Flex gap={'1em'}>
                        <Checkbox colorScheme="purple" background={'blackAlpha.100'} isChecked={isDone}></Checkbox>
                        <Text>{recipe.ingredient}</Text>
                    </Flex>
                </Th>
                <Th>{recipe.measure}</Th>
            </Tr>
    );
}
