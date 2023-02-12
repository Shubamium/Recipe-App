import { Button, Card, CardBody, CardFooter, CardHeader, SimpleGrid, Heading, Divider, Image,Text, Box, Tag, Flex, Skeleton, SkeletonText  } from "@chakra-ui/react";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function SearchResults_Skeleton({ results }) {
  let placeholder = [1,2,3,4,5,6,7,8,9];
  return (
    <SimpleGrid columns={3} my={'2'} justifyItems={'center'} mx={'auto'} gap={'2em'} maxWidth={'5xl'}>
        {placeholder.map((a)=>{
            return (
               <Skeleton>
                 <Card key={a} mx={'2em'} shadow={'xl'} outline={'2px solid teal'} w={'100%'} bg={'teal.50'}>
                    <CardHeader padding={'3'}>
                        <Skeleton>
                            <Heading fontSize={'1rem'}textAlign={'left'}>lorem120lorem120lorem120</Heading>
                        </Skeleton>
                    </CardHeader>
                    <Divider ></Divider>
                    <CardBody padding={'0'}>
                         <Image loading="lazy" src={a.strMealThumb} h={'200px'} w={'100%'} objectFit={'cover'}></Image>
                        <Box w={'100%'} bg={'gray.400'} borderBlock={'1px solid gray'}>
                             <Text>category - area</Text>
                        </Box>
                        <Flex justifyContent={"center"} gap={'5px'} m={'2'} wrap={'wrap'}>
                            <Tag  shadow={'md'}>tag </Tag>
                            <Tag shadow={'md'}>tage</Tag>
                            <Tag  shadow={'md'}>tag name</Tag>
                        </Flex>
                    </CardBody>
                    <CardFooter padding={'2'}>
                            <Flex justifyContent={'right'} w={'100%'}>
                            <Button bg={'cyan.600'} shadow={'md'} colorScheme={'cyan'} rightIcon={<FaArrowAltCircleRight/>} variant={'solid'}> View Recipe </Button>
                        </Flex>
                    </CardFooter>
                </Card>
               </Skeleton>
            )
        })}
    </SimpleGrid>
  )
}
