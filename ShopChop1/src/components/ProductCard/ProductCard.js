import React from "react";
import { View, Text , Image ,TouchableWithoutFeedback } from "react-native";

import styles from "./ProductCard.style"; 
function ProductsCard({product, onSelect}) 
{
    return(

      <TouchableWithoutFeedback onPress={onSelect}>
             <View  style={styles.Container} >
            <Image
              source={{uri : product.image}}
              style={styles.image}
            />
          <View style= {styles.bodyContainer}>
              <Text style={styles.title}>{product.title}</Text>
              <Text style= {styles.price}>{product.price} TL</Text>
          </View>
         </View>
      </TouchableWithoutFeedback>

    ); 
}

export default ProductsCard; 