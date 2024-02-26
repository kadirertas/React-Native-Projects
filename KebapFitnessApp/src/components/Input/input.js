import React from "react";
import{Text, View, TextInput} from "react-native"; 
import styles from './input.style'; 

function Input ({Label, Placeholer, OnChangeText}) 
{
    return(
        <View  style = { styles.Container}>
            <Text style = {styles.label}>{Label}</Text>
            <View style ={ styles.InputStyleContainer}>
                <TextInput placeholder={Placeholer} onChangeText={OnChangeText}/>
            </View>
        </View>
    );
     
}

export default Input; 