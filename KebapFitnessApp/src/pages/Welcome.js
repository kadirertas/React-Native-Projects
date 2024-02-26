import React from "react";
import { SafeAreaView , View , Text, StyleSheet } from "react-native";

import CustomButton from "../components/Button";

function Welcome ( props) 
{

    function navigateToPage () 
    {
           props.navigation.navigate('MemberSignScreen');
    }
  
    return (
         <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.header}>
                    Kebap Fitness Salonu  
                </Text>
               
                <CustomButton text={' Üye Kaydı Oluştur '} onPress={navigateToPage} />
                
            </View>
         </SafeAreaView>
    );

}

export default Welcome; 


const styles = StyleSheet.create({

    container : {
        flex: 1, 
        justifyContent: 'center',

    },
    header: 
    {
      textAlign: 'center', 
      fontSize: 30 , 
      fontWeight: 'bold', 
      fontWeight: 'bold',

    }

});