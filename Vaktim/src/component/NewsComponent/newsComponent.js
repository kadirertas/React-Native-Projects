import React from "react";
import { View, Text, Image, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import Icon2 from 'react-native-vector-icons/MaterialIcons'; 
import styles from "./newsComponent.style";
import { useSelector } from 'react-redux';
import database from '@react-native-firebase/database'; // Firebase Realtime Database'i içe aktarın

function NewsComponent({ news, onSelect }) {
    const user = useSelector(state => state.user);

    const handleAddToFavorites = async () => {
        try {
            const userFolderPath = `users/${user.id}/fawnews/${user.id}`;
            const reference = database().ref(userFolderPath);
            await reference.push(news);
            console.log("Haber favorilere eklendi.");
        } catch (error) {
            console.error("Haber favorilere eklenirken hata oluştu:", error);
        }
    };

    const handleDeleteUser = async () => {
        try {
            const response = await fetch(`API_ENDPOINT/${news.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                
                },
            });
    
            if (!response.ok) {
                throw new Error('Haber silinemedi.');
            }
    
            console.log("Haber başarıyla silindi.");
        } catch (error) {
            console.error("Haber silinirken bir hata oluştu:", error);
        }
    };

    const confirmDeleteUser = () => {
        Alert.alert(
            "Haberi Sil",
            "Habere ait tüm verileri silmek istediğinizden emin misiniz?",
            [
                { text: "İptal", onPress: () => console.log("Silme işlemi iptal edildi") },
                { text: "Sil", onPress: handleDeleteUser }
            ],
            { cancelable: true }
        );
    };

    return (
        <SafeAreaView style={styles.Container}>
            <TouchableWithoutFeedback onPress={onSelect}>
                <View style={styles.newsContainer}>
                    
                  <Text style={styles.title}>{news.author}</Text>
                  {news.urlToImage !== "" && news.urlToImage && (
                        <Image
                            source={{ uri: news.urlToImage }}
                            style={styles.image}
                        />
                    )}
                   
                  <Text style={styles.title}>{news.title}</Text>
                    <Text style={styles.shortDescription}>{news.description}</Text>

                    <View style={styles.bottomButtonsContainer}>
                        <TouchableOpacity onPress={handleAddToFavorites}>
                            <Icon name="hand-holding-heart" size={24} color="red" style={styles.icon} />
                        </TouchableOpacity>
                  
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

export default NewsComponent;



/*
     ---------------- Profile Kısmındaki haber ekle kısmını etkinleştirecek kısım----------------

import React from "react";
import { View, Text, Image, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import Icon2 from 'react-native-vector-icons/MaterialIcons'; 
import styles from "./newsComponent.style";
import { useSelector } from 'react-redux';
import database from '@react-native-firebase/database'; // Firebase Realtime Database'i içe aktarın

function NewsComponent({ news, onSelect }) {
    const user = useSelector(state => state.user);

    const handleAddToFavorites = async () => {
        try {
            const userFolderPath = `users/${user.id}/fawnews/${user.id}`;
            const reference = database().ref(userFolderPath);
            await reference.push(news);
            console.log("Haber favorilere eklendi.");
        } catch (error) {
            console.error("Haber favorilere eklenirken hata oluştu:", error);
        }
    };

    const handleDeleteUser = async () => {
        try {
            const userFolderPath = `/News/${news.id}`;
            const reference = database().ref(userFolderPath);
            await reference.remove();
            
        } catch (error) {
            console.error(" hata oluştu:", error);
        }
    };

    const confirmDeleteUser = () => {
        Alert.alert(
            "Haberi Sil",
            "Habere ait tüm verileri silmek istediğinizden emin misiniz?",
            [
                { text: "İptal", onPress: () => console.log("Silme işlemi iptal edildi") },
                { text: "Sil", onPress: handleDeleteUser }
            ],
            { cancelable: true }
        );
    };

    return (
        <SafeAreaView style={styles.Container}>
            <TouchableWithoutFeedback onPress={onSelect}>
                <View style={styles.newsContainer}>
                    
                  <Text style={styles.title}>{news.title}</Text>
                  {news.image !== "" && news.image && (
                        <Image
                            source={{ uri: news.image }}
                            style={styles.image}
                        />
                    )}
                   
                  <Text style={styles.title}>{news.shortDescription}</Text>
                    <Text style={styles.shortDescription}>{news.longDescription}</Text>

                    <View style={styles.bottomButtonsContainer}>
                        <TouchableOpacity onPress={handleAddToFavorites}>
                            <Icon name="hand-holding-heart" size={24} color="red" style={styles.icon} />
                        </TouchableOpacity>
                        {user.admin ? (
                            <>
                                <TouchableOpacity onPress={confirmDeleteUser}>
                                    <Icon2 name="auto-delete" size={24} color="black" style={styles.icon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => console.log("Çöp kutusu butonuna tıklandı")}>
                                    <Icon2 name="tips-and-updates" size={24} color="blue" style={styles.icon} />
                                </TouchableOpacity>
                            </>
                        ) : null}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

export default NewsComponent;













*/