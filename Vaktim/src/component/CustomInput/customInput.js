import React from "react";
import { TextInput, View  } from "react-native";
import styles from './customInput.style'; 

function CustomInput ( {title ,onType, value}) 
{
    return (
        
        <View style = {styles.InputContainer}>
                 <TextInput  
                  style={styles.InputTitle}
                  placeholder={title}

                  onChangeText={onType}
                  value={value}
                 
                 
                 
                 />
        </View>

    ); 
}

export default CustomInput; 