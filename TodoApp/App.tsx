import React ,{useState} from "react";

import {View, Text, FlatList, StyleSheet,Button } from 'react-native'; 
import TodoData from './ZZZ_Conmponets/TodoCard/TodoDATA.json';
import TodoCard from "./ZZZ_Conmponets/TodoCard/TodoCard";
import SearchBar from "./ZZZ_Conmponets/SearchBar";

function App ( ) 
 {  
  const TodoFunction =   ({item }: {item: any} ) => <TodoCard card = {item}/>
  let [TodoQuantity, SetTodoQuantity] = useState(TodoData.length); 
const MissionCompleted = () =>
  {
    
    SetTodoQuantity ( TodoQuantity = TodoQuantity-1 ); 

  }
  return (
    <View style = {styles.container}>
     
    <View style = {styles.ListNumber}>
        
        <Text style = {styles.todo}>Yapılacaklar</Text>
        <Text style = {styles.todoNumber}>{TodoQuantity}</Text>
        
    
    </View>



    <FlatList
        data = {TodoData}
        renderItem={TodoFunction}  

    />

    <SearchBar />
    </View>
  ); 
 }

 export default App;



 const styles = StyleSheet.create (
  
  {
    container : 
    {
     flex:1,
     backgroundColor :'#102027'
    },

    ListNumber: 
    {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
    }, 
    todo: 
    {
      fontSize:35, 
      color : 'orange',
      margin: 10 ,
      fontWeight: 'bold', 

    },
    todoNumber: 
    {
      fontSize:35, 
      color : 'orange',
      margin: 10 , 
      marginRight: 30 , 
      fontWeight: 'bold', 

    },



  })