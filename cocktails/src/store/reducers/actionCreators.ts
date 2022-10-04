import axios from "axios";
import { ICocktail } from "../../types/models";
import { AppDispatch } from "../store";


export const fetchRandomCocktail = async (dispatch: AppDispatch) => {
    try{
        const resp = await axios.get<ICocktail[]>('www.thecocktaildb.com/api/json/v1/1/random.php')
        resp 
    }
    catch(e){
        console.log(e)
    }
}