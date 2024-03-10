import React from "react";
import { SafeAreaView, View, Text , FlatList, StyleSheet} from "react-native";
import { useSelector } from "react-redux";




const Secondary= ()=>
{
    const nameList = useSelector(s => s.nameList); 
    const userName = useSelector(s => s.userName); 
    return (
        <SafeAreaView >
                <Text style={{fontSize: 35 }}>Secondary</Text>
    
         <FlatList
         
         data={userName}
         renderItem={({item}) => <Text  style={styles.text}> {item}  Kullanıcı Adıyla  </Text>}
         
         />
     <FlatList
         
         data={nameList}
         renderItem={({item}) => <Text style={styles.text}>Hoşgeldiniz {item} bey</Text>}
         
         />
        </SafeAreaView>
    ); 
}

export default Secondary; 

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      color: 'blue',
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Arial',
      // Diğer istediğiniz stil özelliklerini buraya ekleyebilirsiniz
    },
  });