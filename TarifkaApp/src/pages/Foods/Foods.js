import React from "react";
import { View ,Text, FlatList } from "react-native";
import Hooks from "../../Hooks";
import Config from "react-native-config";
import FoodsCard from "../../component/FoodsCard/FoodsCard";
import Loading from "../../component/loading/Loading";
import Fault from "../../component/error/error";



function Foods ({route,navigation}) 
{
    const HandleCategoriesSelect=meals=>{
        navigation.navigate("Details Screen",{meals})
    }
    const categories = route.params.category; 
    const {loading, data , error  } = Hooks(Config.GetFoodsKey +categories); 

    getFoods=  ({item}) =><FoodsCard meals={item} onSelect={()=>HandleCategoriesSelect(item.strMeal)}/>
    if ( loading) 
    {
     return <Loading/>
    }
    if ( error) 
    {
      return <Fault/>
    }
    return(
        <FlatList          
        data={data.meals}
        renderItem={getFoods}
        />

    ); 
}

export default Foods; 