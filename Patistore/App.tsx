import React from "react";
import { View, Text, SafeAreaView, FlatList, TextInput, StyleSheet } from 'react-native';
import Product from './PatiStore.json';
import ProductPage from "./ZZZ.componets/PatiPoduct";

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.header}>PatikaStore</Text>
        <View style= {styles.container}>
       <TextInput
          style={styles.input}
          placeholder="Arama yapın..."
        />
     </View>
        <FlatList
          data={Product}
          numColumns={2}
          renderItem={({ item }) => <ProductPage card={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'left',
    marginVertical: 10,
    marginBottom: 20, 

  },
  container: {
    display:'flex',
    alignItems:'center'
    
  }, 
  input: {
    height: 50,
    width: '90%',
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8, 

  },

});

export default App;
