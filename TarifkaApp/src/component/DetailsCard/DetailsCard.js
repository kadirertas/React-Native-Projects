import React from "react";
import { View, Text, Image, Button , Linking } from "react-native";
import styles from './DetailsCard.style'; 

function DetailsCard ({meals}) 
{
 
    return(
        
        <View style ={styles.container}>
             
            <Image style ={styles.image}source={{uri: meals.strMealThumb}} />
            
            <View style ={styles.titleContainer}>
            <Text style ={styles.title}>{meals.strMeal}</Text>
            <Text style={styles.smallTitle}>{meals.strArea}</Text>
            </View>
            
            <Text style ={styles.desc}>
                {meals.strInstructions}
            </Text>

               <Button title="Watch on Youtube " style={styles.Button} onPress={()=>{Linking.openURL(meals.strYoutube)}}/>
        </View>


    ); 

}
export default DetailsCard; 