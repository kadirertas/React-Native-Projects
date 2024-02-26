import React from "react";
import { View , Text, Image } from "react-native";
import styles from './datails.style'; 
import useFetch from "../../hooks/useEfect/useEffect";
import Config from "react-native-config";
import Hata from "../../components/Error/Error";
import Loading from "../../components/Loading";


function Datails ({route}) {
    const {id} = route.params;
    const { loading, data, error } = useFetch(Config.ApiKey+ "/" +id);

    if (error) {
        return <Hata />;
    }
    
    if (loading || !data) { // data değişkeni null ise veya yükleme devam ediyorsa Loading bileşenini göster
        return <Loading />;
    }

    return (
        <View style={styles.Container}>
            {/* Veri yüklendikten sonra Image bileşenine erişilebilir */}
            <Image style={styles.image} source={{uri: data.image}} />
                 <View style= {styles.bodyContainer}>
                 <Text style={styles.title}>{data.title}</Text>
                 <Text style={styles.desc}>{data.description}</Text>
                 <Text style={styles.price}>{data.price} TL</Text>
                 </View>
        </View>
    );
}

export default Datails;
