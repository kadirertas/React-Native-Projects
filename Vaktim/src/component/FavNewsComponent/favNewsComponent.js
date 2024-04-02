import React from "react";
import { View, Text, Image, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import styles from "./favNewsmponent.style";
import { useSelector } from 'react-redux';
import database from '@react-native-firebase/database';

function FavNewsComponent({ news, onSelect }) {


    const user = useSelector(state => state.user);
    const handleDeleteFavorites = async () => {
        try {
            const userFolderPath = `users/${user.id}/fawnews/${user.id}`;
            const snapshot = await database().ref(userFolderPath).once('value');
            const favorites = snapshot.val();
            
            
            const newsKey = Object.keys(favorites).find(key => favorites[key].id === news.id);
    
           
            if (newsKey) {
                await database().ref(`${userFolderPath}/${newsKey}`).remove();
                console.log("Haber favorilerden kaldırıldı.");
            } else {
                console.log("Haber favorilerde bulunamadı.");
            }
        } catch (error) {
            console.error("Haber favorilerden kaldırılırken hata oluştu:", error);
        }
    };
    
    const confirmDeleteFavorites = () => {
        Alert.alert(
            "Haberi Favorilerden Kaldır",
            "Haberi Favorilerden kaldırmak istediğinize eminmisiniz",
            [
                { text: "İptal", onPress: () => console.log("Silme işlemi iptal edildi") },
                { text: "Sil", onPress: handleDeleteFavorites }
            ],
            { cancelable: true }
        );
    };

    return (
        <SafeAreaView style={styles.Container}>
            <TouchableWithoutFeedback onPress={onSelect}>
                <View style={styles.newsContainer}>
                
                                   {news.urlToImage ? (
                       <Image
                           source={{uri: news.urlToImage}}
                           style={styles.image}
                       />
                   ) : (
                       <View style={styles.noImageContainer}>
                           <Text style={styles.title}>Duyuru</Text>
                       </View>
                   )}
                   
                        <Text style={styles.title}>{news.title}</Text>
                    <Text style={styles.shortDescription}>{news.description}</Text>

                    <View style={styles.bottomButtonsContainer}>
                        <TouchableOpacity onPress={confirmDeleteFavorites}>
                            <Icon name="heart-broken" size={24} color="red" style={styles.icon} />
                        </TouchableOpacity>
                      
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

export default FavNewsComponent;
