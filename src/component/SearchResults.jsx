import { Button, Card, CardBody, CardFooter, CardHeader, SimpleGrid, Heading, Divider, Image,Text  } from "@chakra-ui/react";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function SearchResults({ results }) {
  return (
    <SimpleGrid columns={3} my={'2'} justifyItems={'center'} mx={'auto'} gap={'2em'} maxWidth={'4xl'}>
        {results.map((a)=>{
            return (
                <Card key={a.idMeal} mx={'2em'} shadow={'md'} outline={'2px solid black'} w={'100%'}>
                    <CardHeader padding={'3'}>
                        <Heading fontSize={'1rem'}textAlign={'left'}>{a.strMeal}</Heading>
                    </CardHeader>
                    <Divider></Divider>
                    <CardBody padding={'0'}>
                        <Image src={a.strMealThumb} h={'200px'} w={'100%'} objectFit={'cover'}></Image>
                        <Text fontSize={'.8rem'}>a</Text>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme={"linkedin"} rightIcon={<FaArrowAltCircleRight/>} variant={'solid'}> More Info </Button>
                    </CardFooter>
                </Card>
            )
        })}
    </SimpleGrid>
  )
}
