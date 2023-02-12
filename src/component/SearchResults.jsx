import { Button, Card, CardBody, CardFooter, CardHeader, SimpleGrid } from "@chakra-ui/react";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function SearchResults({ results }) {
  return (
    <SimpleGrid columns={3} justifyItems={'center'} mx={'auto'} gap={'2em'} maxWidth={'lg'}>
        {results.map((a)=>{
            return (
                <Card key={a} mx={'2em'} shadow={'md'}>
                    <CardHeader>Recipe 1</CardHeader>
                    <CardBody>This Recipe Contain:</CardBody>
                    <CardFooter>
                        <Button colorScheme={"linkedin"} rightIcon={<FaArrowAltCircleRight/>} variant={'solid'}> More Info </Button>
                    </CardFooter>
                </Card>
            )
        })}
    </SimpleGrid>
  )
}
