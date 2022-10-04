import { View, Text, Image, StyleSheet } from 'react-native'
import { ICocktail, IDrink } from '../types/models'

const Cocktail : React.FC<IDrink> = (cocktail) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{cocktail.strDrink} ({cocktail.strAlcoholic})</Text>
            {cocktail.strDrinkThumb ? 
            <Image source={{uri: cocktail.strDrinkThumb}} style={{width: 240, height: 240, alignSelf: 'center'}} /> : <></>}  
            <Text>Category: {cocktail.strCategory}</Text>         
            <Text style={styles.instructions}>Instructions: {cocktail.strInstructions}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12
    },
    title: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 18,
        color: '#ecbb18'
    },
    instructions: {
        marginVertical: 12
    }
})

export default Cocktail