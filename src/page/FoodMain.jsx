import { Card, CardBody, SimpleGrid,Flex, CardHeader, Heading, Divider,Box, Text, Table, TableCaption, Thead, Tr, Th,Td, Tbody } from "@chakra-ui/react";

export default function FoodMain({food}) {
  return (
     <Box p={10}>
         <Flex width={'100%'} gap={'1em'} wrap={'wrap'}>
            <Card maxW={{base:'initial',xl:'30vw'}} border={'3px solid purple'} p={0} m={0}>
                <CardHeader p2={2}>
                    <Heading>
                        Food Name
                    </Heading>
                    <Text>Category - Area</Text>
                </CardHeader>
                <CardBody pt={0}>
                    Instructions:
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloribus ipsa laudantium eaque numquam rem, tenetur quibusdam facilis blanditiis assumenda. Iusto maxime a mollitia recusandae veniam labore omnis tempora officia!
                </CardBody>        
            </Card>                
                
            <Card flexGrow={1}  minWidth={'450px'}>
                <CardHeader>
                    <Heading fontWeight={'bold'} fontSize={'1.2rem'} color={'pink.800'}>Watch the Tutorial</Heading>
                </CardHeader>
                <Divider h={'2px'} color={'pink.700'}></Divider>
                <CardBody>
                    <Box shadow={'xl'}>
                        <iframe width="100%" height={'350px'} src="https://www.youtube.com/embed/pOJEmDBgtSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Box>
                </CardBody>
            </Card>
        </Flex>
        <Divider m={5}></Divider>
        <Box borderRadius={'sm'} border={'3px solid purple'} p={5} >
            <Table colorScheme={'purple'}>
                <Thead>
                    <TableCaption fontSize={'2rem'} fontWeight={'500'}>Ingredients</TableCaption>
                    <Tr>
                        <Th>Ingredient</Th>
                        <Th>Measurement</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Lentils</Td>
                        <Td>1 Cup</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
     </Box>
  )
}
