import React  from "react";
import {View, Text, SafeAreaView,FlatList } from  'react-native'; 
import NewsData from './news_data.json'; 
import NewsCard from "./ZZZ_componets/NewsCard";
function App () 
{
  return(
          <SafeAreaView>
            <View>
             


              <FlatList
              
              data={NewsData}
              renderItem={({item })=> <NewsCard news = {item}/>}
              
              
              />
            </View>
          </SafeAreaView>
  ); 
}

export default App ; 