import React from "react";
import { SafeAreaView, Text, FlatList ,ActivityIndicator } from "react-native";
import Config from "react-native-config";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useEfect/useEffect";
import Loading from "../../components/Loading";
import Hata from "../../components/Error";

const Products = ({navigation}) => {
   const {loading, data , error} = useFetch(Config.ApiKey);

    const HandleProductSelected = id => {
      navigation.navigate("DetailsScreen", {id});
    }

  const renderProduct = ({item}) =><ProductCard product={item} onSelect={() => HandleProductSelected(item.id)}/>

      if (error) {
       return(
           <Hata/>
          
       );
        
      }
       
     

     if(loading)  
      { 
        return(<Loading />); 
      }
       
    return(
      <SafeAreaView>
       <FlatList
       data={data}
       renderItem={renderProduct}

     />




    </SafeAreaView>
    ); 

};

export default Products;
