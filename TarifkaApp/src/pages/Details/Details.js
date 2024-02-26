import React from "react";
import { View ,Text ,FlatList} from "react-native";
import styles from './Details.style'; 
import DetailsCard from "../../component/DetailsCard";
import Hooks from "../../Hooks";
import Config from "react-native-config";
import Loading from "../../component/loading/Loading";
import Fault from "../../component/error/error";
function Details ({route}) 
{

    const details=  route.params.meals ; 
    const {loading, data , error  } = Hooks(Config.GetDetailsKey + details );
 
  console.log (details); 

   const getDetails = ( {item}) => <DetailsCard meals={item}/>

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
       
       data={data.meals}
       renderItem={getDetails}
       />

    ); 
}

export default Details; 