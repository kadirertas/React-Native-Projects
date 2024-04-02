import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, ActivityIndicator, FlatList, View } from "react-native";
import StyleLibrary from "../../../component/StyleLibrary/styleLibrary";
import AnnouncementsComponent from "../../../component/AnnouncementsComponent";
import styles from './announcements.style';
import database from '@react-native-firebase/database';

function Announcements({ navigation }) {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const announcementsRef = database().ref('/Announcements');

    const handleData = snapshot => {
      if (snapshot.val()) {
        setAnnouncements(Object.values(snapshot.val()));
        setLoading(false);
       
      } else {
        setAnnouncements([]);
        setLoading(false);
      }
    };

    announcementsRef.on('value', handleData);

    return () => {
      announcementsRef.off('value', handleData);
    };
  }, []);

  const renderAnnouncementItem = ({ item }) => <AnnouncementsComponent announcement={item} onSelect={null} navigation={navigation} />;

  if (loading) {
    return (
      <SafeAreaView style = {{ flex: 1, justifyContent:'center', alignItems: 'center', backgroundColor: StyleLibrary.formBackgroundColor }}>
        <ActivityIndicator size="large" color={StyleLibrary.buttonBackgroundcolor} />
      </SafeAreaView>
    );
  }

  if (announcements.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: StyleLibrary.buttonBackgroundcolor, fontSize: 25 }}>No announcements available.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.newsTitleContainer}>
        <Text style={styles.newsTitle}>Duyurular </Text>
      </View>
      <FlatList
        data={announcements}
        renderItem={renderAnnouncementItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

export default Announcements;
