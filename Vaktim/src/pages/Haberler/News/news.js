import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, ActivityIndicator, FlatList, View } from "react-native";
import StyleLibrary from "../../../component/StyleLibrary/styleLibrary";
import NewsComponent from "../../../component/NewsComponent/newsComponent";
import styles from './news.style';
import axios from 'axios';



function News({ navigation }) {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios({
          method: 'get',
          url: 'https://newsapi.org/v2/everything?q=apple&from=2024-03-31&to=2024-03-31&sortBy=popularity&apiKey=9cae2500ffd5409f9e23a8a577d632e2',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': '9cae2500ffd5409f9e23a8a577d632e2' 
          }
        });
        setNewsData(response.data); 
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    }
    
    fetchData(); 
  }, []);
  

  const renderNewsItem = ({ item }) => <NewsComponent news={item} onSelect={null}/>

  if (loading) {
    return (
      <SafeAreaView style = {styles.Container} >
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
              <Text style = {styles.newsTitle}> Haber Akışı </Text>
              </View>
      <FlatList
        data={Object.values(newsData.articles)} 
        renderItem={renderNewsItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

export default News;


/*
     ---------------- Profile Kısmındaki haber ekle kısmını etkinleştirecek kısım----------------

import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, ActivityIndicator, FlatList, View } from "react-native";
import StyleLibrary from "../../component/StyleLibrary/styleLibrary";
import NewsComponent from "../../component/NewsComponent/newsComponent";
import styles from './news.style';
import axios from 'axios';

import database from '@react-native-firebase/database';
import { useSelector } from 'react-redux';
function News({ navigation }) {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.user);
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const newsRef = database().ref(`/News/`);
        newsRef.on('value', snapshot => {
          const data = snapshot.val();
          if (data) {
            const newsArray = Object.values(data);
            setNewsData(newsArray);
            console.log(newsArray);
            setLoading(false);
          } else {
            setNewsData([]);
            setLoading(false);
          }
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
  

  const renderNewsItem = ({ item }) => <NewsComponent news={item} onSelect={null}/>

  if (loading) {
    return (
      <SafeAreaView >
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
  console.log(newsData); 
  return (
    <SafeAreaView style = {styles.Container} >
             <View style = {styles.newsTitleContainer}>  
              <Text style = {styles.newsTitle}> Haber Akışı </Text>
              </View>
      <FlatList
        data={newsData} 
        
        renderItem={renderNewsItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

export default News;
















*/