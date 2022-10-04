import { View, Text } from "react-native"
import { cocktailAPI } from "../service/cocktailAPI"
import Cocktail from "./cocktail"


const CocktailList: React.FC = () =>{

    const {data, error, isLoading} = cocktailAPI.useGetRandomCocktailQuery('')    
    console.log(data?.drinks)    
   
    return(
    <View>
        {data ?
        (<View>
        {
          data.drinks.map(d => <Cocktail key={d.idDrink} {...d}/>)
        }
        </View>) : (<Text>Loading...</Text>)}
    </View>
    )    
}

export default CocktailList