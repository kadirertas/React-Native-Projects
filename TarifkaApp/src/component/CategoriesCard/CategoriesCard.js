import React from "react";
import { View, Text, Image ,TouchableWithoutFeedback } from "react-native";
import styles from './CategoriesCard.style'; 

function CategoriesCard ({categories ,onselected}) {


    return(

        <View style = {styles.Container}>
            <TouchableWithoutFeedback  onPress={onselected}>
            <View  style = {styles.categoryPages}> 
                 <Image  style = {styles.image} source={{uri: categories.strCategoryThumb}}></Image>
                 <Text style = {styles.title}>{categories.strCategory}</Text>
            </View>
            </TouchableWithoutFeedback >
        </View>

    ); 
}

export default CategoriesCard; 