import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from './customButton.style'; 



const CustomButton = ({title, onPress,}) => 
{
    return (

          <TouchableOpacity style ={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonTitle}>
                {title}
            </Text>
          </TouchableOpacity>
    ); 
}

export default CustomButton; 