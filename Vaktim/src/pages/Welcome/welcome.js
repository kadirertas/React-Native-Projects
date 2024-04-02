import React, { useRef, useEffect } from "react";
import { Animated, SafeAreaView, Text, View } from "react-native";
import styles from './welcome.style'; 

import CustomButton from "../../component/CustomButton";
import LottieFiles from "../../component/LottieFile/lottieFile";
import NavigateToRoute from "../../Funciton/NavigationFunciton/navigationFunction";

function Welcome ({navigation} ) {
    const scrollY = useRef(new Animated.Value(0)).current;
    const HandlePress = ( ) => {
      NavigateToRoute({ routeName: 'LoginScreen', navigation: navigation });}
    useEffect(() => {
      Animated.timing(
        scrollY, 
        {
          toValue: 1, 
          duration: 500,
          useNativeDriver: true
        }
      ).start();
    }, []);
  
    const translateY = scrollY.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 0] 
    });
  
    const assets = require ("../../assets/LottieJson/welcome.json");
    return(

    
       <SafeAreaView style = {styles.container}>
           
          
             <Animated.View style={ { transform: [{ translateY }] }}>
               <LottieFiles width={'100%'} height={'80%'} assets={assets}  /> 
               
               <View style={styles.titleContainer}>
                <Text style = {styles.title}>
               Welcome Vaktim 
               </Text>
           
               </View>
               <View style={styles.buttonContainer}>
               <CustomButton onPress={HandlePress} title={"Hadi Başlayalım"} /> 
               </View>
             </Animated.View>
         
            
       </SafeAreaView>
    ); 
}


export default Welcome; 