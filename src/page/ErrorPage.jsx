import { Link } from "react-router-dom";
import { Button, VStack, Heading } from "@chakra-ui/react";
export default function ErrorPage() {
  return (
    <>
        <VStack h={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <Heading>Page doesn't Exist! 404</Heading>
            <Link to={'/'} ><Button variant={'solid'} colorScheme={'messenger'}>Go Back!</Button></Link>
        </VStack>
    </>

  )
}
