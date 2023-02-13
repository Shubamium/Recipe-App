import { Box, Button, Heading, VStack, Image } from "@chakra-ui/react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function FoodSidebar({food}) {
  return (
   <div>
     <Box bg={"pink.900"} minHeight={'100vh'} p={0} py={5} position={'fixed'} w={'25%'}>
        <Button variant={'solid'} leftIcon={<FaArrowAltCircleLeft/>} colorScheme={'pink'} m={4}>Go Back!</Button>
        <VStack textAlign={"left"} w={'100%'} bg={'blackAlpha.300'} my={5} borderRadius={'2em'} minH={'65vh'} maxH={'500px'}>
            {/* <Heading  color={'whiteAlpha.800'}>08530</Heading> */}
            <Image py={10} flexGrow={1} src="https://www.themealdb.com/images/media/meals/q8sp3j1593349686.jpg" h={'300px'} w={'100%'} bg={'blackAlpha.400'} objectFit={'cover'}></Image>
        </VStack>
    </Box>
   </div>
  )
}
