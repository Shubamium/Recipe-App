import { Button, Card, CardBody, CardFooter, CardHeader, SimpleGrid, Heading, Divider, Image,Text, Box, Tag, Flex, Skeleton  } from "@chakra-ui/react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SearchResults({ results }) {
    
  return (
    <SimpleGrid columns={3} my={'2'} justifyItems={'center'} mx={'auto'} gap={'2em'} maxWidth={'5xl'}>
        {results.map((a)=>{
            let tags = a.strTags || null;
            if(tags){
                tags = tags.split(',');
            }
            return (
                <Card key={a.idMeal} mx={'2em'} shadow={'xl'} outline={'3px solid purple'} w={'100%'} bg={'pink.100'}>
                    <CardHeader padding={'3'}>
                        <Heading fontSize={'1.4rem'} textAlign={'left'} color={'pink.800'} fontWeight={'bold'}>{a.strMeal} </Heading>
                    </CardHeader>
                    <Divider ></Divider>
                    <CardBody padding={'0'}>
                        <Image loading="lazy" src={a.strMealThumb} h={'200px'} w={'100%'} objectFit={'cover'}></Image>
                        <Box w={'100%'} bg={'pink.400'} borderBlock={'1px solid purple'}>
                            <Text color={'pink.800'}>{a.strCategory} - {a.strArea}</Text>
                        </Box>
                        <Flex justifyContent={"center"} gap={'5px'} m={'2'} wrap={'wrap'}>
                            {tags && tags.map((tag,index)=>{
                                return (
                                     <Tag key={index }variant={"solid"} bg={index < 8 ? `pink.${9 - (index + 1)}00` : 'blue.400'} shadow={'md'}>{tag}</Tag>
                                )
                            })}
                        </Flex>
                    </CardBody>
                    <CardFooter padding={'2'}>
                        <Flex justifyContent={'right'} w={'100%'}>
                            <Link to={`/food/${ a.idMeal}`}>
                                <Button bg={'pink.700'} shadow={'md'} colorScheme={'pink'} rightIcon={<FaArrowAltCircleRight/>} variant={'solid'}> View Recipe </Button>
                            </Link>
                        </Flex>
                    </CardFooter>
                </Card>
            )
        })}
    </SimpleGrid>
  )
}
