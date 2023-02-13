import { Button, Grid, GridItem } from "@chakra-ui/react";
import { useLoaderData, useParams } from "react-router-dom"
import ErrorPage from "./ErrorPage";
import FoodMain from "./FoodMain";
import FoodSidebar from "./FoodSidebar";

export default function Food() {
    const [data,error] = useLoaderData();
    if(error){
      return(
        <ErrorPage/>
      )
    }
  return (
    <Grid templateColumns={'repeat(8,1fr)'} w={"100%"}>
        <GridItem minH={'100vh'} colSpan={'2'}>
           <FoodSidebar food={data}/>
        </GridItem>
        <GridItem colSpan={'6'}>
            <FoodMain food={data}></FoodMain>
        </GridItem>
    </Grid>
  )
}
