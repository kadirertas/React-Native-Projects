import React from "react";
import {View,Text,ImageBackground,TouchableWithoutFeedback} from "react-native"
import styles from "./FoodsCard.style"
function FoodsCard({meals,onSelect}){
 return(
        <View style={styles.allPage}>
    <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <ImageBackground source={{uri:meals.strMealThumb}} style={styles.image}>
            <Text style={styles.title}>{meals.strMeal}</Text>
            </ImageBackground>
        </View>
    </TouchableWithoutFeedback>
        </View>
  
 )
}

export default FoodsCard;