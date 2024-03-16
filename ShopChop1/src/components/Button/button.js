import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import styles from './button.style' ;
const CustomButton = ({text, onPress,loading}) => 
{
    return (

        <TouchableOpacity onPress={onPress} style = {styles.container}>
            {loading ? 
            (<ActivityIndicator color={'white'}/>)
            :
                (<Text style = {styles.title}>{text}</Text>  )
            }
          
        </TouchableOpacity>

    ); 
}

export default CustomButton; 