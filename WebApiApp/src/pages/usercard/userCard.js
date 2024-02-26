import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import styles from "./userCard.style"; 

function UserCard (props)
{
    return (

        <View style = {styles.Container}>
           
            <Text style= {styles.username} >
                {props.username} 
            </Text>
            
        <View style = {styles.inner_Container}>
                  
            <Text style= {styles.name}>
                {props.name} 
            </Text>
            <Text style= {styles.email} >
                {props.email} 
            </Text>
        </View>
        </View>
    ); 
}

export default UserCard; 