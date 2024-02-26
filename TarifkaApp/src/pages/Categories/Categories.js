import React,{ useState, useEffect } from "react";
import { View ,Text ,FlatList} from "react-native";
import styles from './Categories.style'
import CategoriesCard from "../../component/CategoriesCard";
import Hooks from "../../Hooks";
import Config from "react-native-config";
import Loading from "../../component/loading/Loading";
import Fault from "../../component/error/error";



function Categories ({navigation}) 
{
  const {loading , data , error} =Hooks(Config.GetCategoryKey); 
const HandleProductSelected = category => {
  navigation.navigate("Foods Screen", {category});

}
const getCategory  = ({item}) => <CategoriesCard categories={item} onselected={() => {HandleProductSelected(item.strCategory)}}/>;

if ( loading) 
{
 return <Loading/>
}
if ( error) 
{
  return <Fault/>
}
    return ( 
           <FlatList
           
           data={data.categories}
           renderItem={getCategory}
           />

    ); 
}

export default Categories; 