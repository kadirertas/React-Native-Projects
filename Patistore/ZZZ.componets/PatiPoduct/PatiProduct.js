import React from "react";
import { View, Image, Text } from 'react-native';
import styles from './PatiProduct.style';

const ProductPage = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.card.imgURL }} />
            <Text style={styles.productName}>{props.card.title}</Text>
            <Text style={styles.productPrice}>{props.card.price}</Text>
        </View>
    );
}

export default ProductPage;
