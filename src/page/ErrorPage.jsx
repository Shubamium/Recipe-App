import { Link, useNavigate } from "react-router-dom";
import { Button, VStack,HStack, Heading } from "@chakra-ui/react";
import { FaArrowCircleRight, FaHome } from "react-icons/fa";
export default function ErrorPage() {
  let nav = useNavigate();
  return (
    <>
        <VStack h={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <Heading>Page doesn't Exist! 404</Heading>
            <HStack justify={'center'}>
              <Link to={'/'} ><Button variant={'solid'} colorScheme={'messenger'} rightIcon={<FaHome/>}>Home </Button></Link>
              <Button variant={'solid'} colorScheme={'messenger'} rightIcon={<FaArrowCircleRight/>}
              onClick={()=>{
                nav(-1);
              }}>Go Back!</Button>
            </HStack>
        </VStack>
    </>

  )
}
