import axios from "axios";
import { redirect } from "react-router-dom";

export default async function FoodLoader({params}) {
    let errorMessage = null;
    let data = null;
    try{
        let link = new URL('https://www.themealdb.com/api/json/v1/1/lookup.php');
        link.searchParams.append('i',params.foodId);
        let res = await axios.get(link);
        if(res.data === null){
            return redirect("/food/404");
        }
        data = res.data.meals[0];
    }catch(err){
        errorMessage = "Error Loading the data";
    }

    return [data, errorMessage];

}