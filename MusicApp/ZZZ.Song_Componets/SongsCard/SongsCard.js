import React from "react";
import  {View , Text , Image} from "react-native"; 

import styles from './SongsCard.style'; 





const  SongsCard  = props => 
{
    const Tukendi = () => {
        return (
              props.song.isSoldOut ?
              <View style = {styles.soldOutContainer} >
            
              <Text style={styles.soldOutTitle}>
                  TÜKENDİK 
              </Text>
              </View> 
              : null
            
        );
    }
    
    
     return(
          
         <View style = {styles.Container}>

            <Image style = {styles.image }source={{uri: props.song.imageUrl}}/>
           
        <View style = {styles.inner_Container}>
                <Text style = {styles.title}>{props.song.title}</Text>
            <View style=  {styles.contentContianer}>
                <View style = {styles.info_Container}>
                    <Text style = {styles.artist}>{props.song.artist}</Text>
                    <Text style = {styles.year}>{props.song.year}</Text>
                </View>
                {Tukendi()}
            </View>
        </View>

         </View>

 

      ); 

}; 

export default SongsCard; 