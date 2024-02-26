import React from "react";
import { TextInput, View } from "react-native";

import styles from './SearchBar.style';

const SearchBar =  ( props) =>
{
    
      return(  <View style = {styles.SearchContainer}>
        <TextInput 

        style  = {styles.searchInput}
        placeholder="Ara ..."
        onChangeText={props.onSearch}

        
        
        
        />
    </View>);
}


export default SearchBar; 