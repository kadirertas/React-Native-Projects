import React from "react";
import { SafeAreaView, Text, FlatList ,Button } from "react-native";
import Config from "react-native-config";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useEfect/useEffect";
import Loading from "../../components/Loading";
import Hata from "../../components/Error";

import {  useDispatch } from "react-redux";
function Products({ navigation }) {
  const { loading, data, error } = useFetch(Config.ApiKey);
  const dispatch = useDispatch();
  const HandleProductSelected = id => {
    navigation.navigate("DetailsScreen", { id });
  };

  const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => HandleProductSelected(item.id)} />;

  if (error) {
    return (
      <Hata />

    );

  }



  if (loading) {
    return (<Loading />);
  }
  const LogOut = () => dispatch({ type: 'SET_USER', payload: { user: null } });
  return (
    <SafeAreaView>
      <Button title="Log Out" onPress={LogOut} />
      <FlatList
        data={data}
        renderItem={renderProduct} />






    </SafeAreaView>
  );

}

export default Products;
