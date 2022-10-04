import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet, Text } from 'react-native'
import store from './src/store/store'
import { Provider } from 'react-redux'
import CocktailList from './src/components/CocktailsList'



export default function App() {  

  return (
    <Provider store={store}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Cocktails</Text>
          <CocktailList/>
        <StatusBar style="auto" />
      </ScrollView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  title:{
    alignSelf: 'center',
    flex: 1,
    marginTop: 60
  }
})
