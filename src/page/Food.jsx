import { useLoaderData, useParams } from "react-router-dom"
import ErrorPage from "./ErrorPage";

export default function Food() {
    const [data,error] = useLoaderData();
    console.log(data);
    if(error){
      return(
        <ErrorPage/>
      )
    }
  return (
    <div>Food #{data.idMeal}</div>
  )
}
