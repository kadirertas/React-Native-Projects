import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, ActivityIndicator, FlatList, View } from "react-native";
import StyleLibrary from "../../component/StyleLibrary/styleLibrary";
import database from '@react-native-firebase/database';
import styles from './favorites.style';

import { useSelector } from 'react-redux';
import FavNewsComponent from "../../component/FavNewsComponent";
function News({ navigation }) {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.user);
  console.log(user); 
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const newsRef = database().ref(`users/${user.id}/fawnews/${user.id}`);
        newsRef.on('value', snapshot => {
          const data = snapshot.val();
          setNewsData(data);
          setLoading(false);
        });
      } catch (error) {
        console.error('Error fetching news data: ', error);
        setLoading(false);
      }
    };

    fetchNewsData();

    return () => {
      database().ref('News').off('value');
    };
  }, []);

  const renderNewsItem = ({ item }) =><FavNewsComponent news={item} onSelect={null}/>

  if (loading) {
    return (
      <SafeAreaView style = {{ flex: 1, justifyContent:'center', alignItems: 'center', backgroundColor: StyleLibrary.formBackgroundColor }} >
        <ActivityIndicator size="large" color={StyleLibrary.buttonBackgroundcolor} />
      </SafeAreaView>
    );
  }

  if (!newsData) {
    return (
      <SafeAreaView style = {{ flex: 1, justifyContent:'center', alignItems: 'center', }}>
        <Text style={{ color: StyleLibrary.buttonBackgroundcolor  ,fontSize: 25}}>No news available.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style = {styles.Container} >
             <View style = {styles.newsTitleContainer}>  
              <Text style = {styles.newsTitle}> Favoriler  </Text>
              </View>
      <FlatList
        data={Object.values(newsData)} 
        renderItem={renderNewsItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

export default News;
