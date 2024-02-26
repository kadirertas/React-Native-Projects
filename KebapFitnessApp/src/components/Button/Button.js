
import React from "react";
import { TouchableOpacity, Text,  } from "react-native";

import styles from './Button.style'
function Button ({text , onPress}) {
    return(
               <TouchableOpacity style={styles.Container } onPress={onPress}>
                <Text style={styles.Text }>{text}</Text>
               </TouchableOpacity>
    );
}

export default Button; 