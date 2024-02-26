import React from "react";
import { TextInput, View , Button } from "react-native";

import styles from './SearchBar.style';

const SearchBar =  ( props) =>
{
    
      return(  <View style = {styles.SearchContainer}>
        <TextInput 

        style  = {styles.searchInput}
        placeholder="Listene Ekle ..."
        onChangeText={props.onSearch}

        
        
        
        />
         <Button
                        title="KAYDET"
                        onPress={() => {
                            console.log("Butona tıklandı!");
                            
                        }}
                        color="#575456"
                        disabled={false}
                       
                        style={{ margin: 10, color: 'red',  }}
                    />
    </View>);
}


export default SearchBar; 