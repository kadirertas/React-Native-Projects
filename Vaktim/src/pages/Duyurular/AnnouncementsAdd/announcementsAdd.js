import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from './announcementsAdd.style'; 
import NavigateToRoute from "../../../Funciton/NavigationFunciton/navigationFunction";
import CustomAnnouncementsForm from "../../../component/CustomAnnouncementsForm";
import AnnouncementsAddFunction from "../../../Funciton/AnnouncementsAddFunction";

function AnnouncementsAdd ({navigation}) {

  const  handleAnnouncementsAdd = (values, ) => {
     AnnouncementsAddFunction({values});
    NavigateToRoute({routeName:"Duyurular", navigation:navigation})
  }

  return (
    <SafeAreaView style={styles.newsAddContainer}>
      <Text style={styles.newsAddTitle}>Duyuru Ekle</Text>
     
     <CustomAnnouncementsForm onPress={handleAnnouncementsAdd}/>
    </SafeAreaView>
  );
}

export default AnnouncementsAdd;


