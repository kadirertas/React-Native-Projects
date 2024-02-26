import React, {useState} from "react";


import {View ,  SafeAreaView,Dimensions,  FlatList, StyleSheet} from 'react-native'; 
import MusicData from './music-data.json'; 

import SongsCard  from "./ZZZ.Song_Componets/SongsCard";
import SearchBar from "./ZZZ.Song_Componets/SearchBar";




function App ( ) 
{
    const [list , setlist] = useState(MusicData) ; 

  const renderSong = ({item}:{ item: any })=> <SongsCard song = {item} />; 
  const renderSeperator= () => <View style =  {styles.seperator}></View>; 
  const bandeSearch = (text:string)=> 
  {
       const FilteredList = MusicData.filter(song =>
        {
            const searchText = text.toLocaleLowerCase() ;
            const currentTittle = song.title.toLowerCase(); 

            return currentTittle.indexOf(searchText) > -1 ; 
        });

        setlist(FilteredList); 
  } 
   

     return (
        <View style = {styles.container}  >
        <SearchBar onSearch ={bandeSearch}/>
        <FlatList
        keyExtractor={item => item.id.toString()}
        data = {list}
        renderItem={renderSong }
        ItemSeparatorComponent={renderSeperator }
        
        />
     





    </View> 
     ); 

}; 


export default App ; 

const styles = StyleSheet.create
({
    container :  
    {
        flex: 1 , 
        backgroundColor: '#debeff'

    },

    seperator: 
    {
          borderWidth: 1, 
          borderColor : '#123548'
    }




});

