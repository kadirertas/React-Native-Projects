import React from "react";
import { View, Text, Image, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import Icon2 from 'react-native-vector-icons/MaterialIcons'; 
import styles from "./announcementsComponent.style";
import { useSelector } from 'react-redux';
import database from '@react-native-firebase/database';
import NavigateToRoute from "../../Funciton/NavigationFunciton/navigationFunction";



function AnnouncementsComponent({ announcement, onSelect, navigation }) {

    const user = useSelector(state => state.user);
console.log(announcement); 
    const handleAddToFavorites = async () => {
        try {
            const userFolderPath = `users/${user.id}/fawnews/${user.id}`;
            const reference = database().ref(userFolderPath);
            await reference.push(announcement);
            console.log("Announcement added to favorites.");
        } catch (error) {
            console.error("Error while adding announcement to favorites:", error);
        }
    };

    const handleDeleteAnnouncement = async () => {
        try {
            const announcementRef = database().ref(`/Announcements/${announcement.id}`);
            await announcementRef.remove();
            console.log("Announcement successfully deleted.");
        } catch (error) {
            console.error("Error while deleting announcement:", error);
        }
    };

    const confirmDeleteAnnouncement = () => {
        Alert.alert(
            "Delete Announcement",
            "Are you sure you want to delete this announcement?",
            [
                { text: "Cancel", onPress: () => console.log("Deletion cancelled") },
                { text: "Delete", onPress: handleDeleteAnnouncement }
            ],
            { cancelable: true }
        );
    };

    return (
        <SafeAreaView style={styles.Container}>
            <TouchableWithoutFeedback onPress={onSelect}>
                <View style={styles.newsContainer}>
                    <Text style={styles.title}>{announcement.title}</Text>
                    <Text style={styles.shortDescription}>{announcement.description}</Text>

                    <View style={styles.bottomButtonsContainer}>
                        <TouchableOpacity onPress={handleAddToFavorites}>
                            <Icon name="hand-holding-heart" size={24} color="red" style={styles.icon} />
                        </TouchableOpacity>
                        {user.admin ? (
                            <>
                                <TouchableOpacity onPress={confirmDeleteAnnouncement}>
                                    <Icon2 name="auto-delete" size={24} color="black" style={styles.icon} />
                                </TouchableOpacity>
                        
                            </>
                        ) : null}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

export default AnnouncementsComponent;
