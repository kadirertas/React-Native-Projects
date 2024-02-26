import React, { useState ,useEffect} from "react";
import { SafeAreaView ,Text, Button ,FlatList,ActivityIndicator,  View} from "react-native";
import axios  from "axios";
import UserCard from "./pages/usercard/userCard";


function App ()
{

  const [userList , SetUseList] =useState([]); 
  const [loading , SetLoading ] = useState(true);  

 async function FetchData () 

  {  
     
    const response = await axios.get("https://jsonplaceholder.typicode.com/users"); 
     
      console.log(response); 
      SetLoading(false);  
      SetUseList(response.data); 
  }

  const renderUser =  ({item})  => <UserCard name = {item.name} username= {item.username} email = {item.email} />; 


  useEffect (() => {FetchData();}, []);
  return (
       <SafeAreaView>
        <View>
        {
          loading 
          ? 
          <ActivityIndicator size={"large"}/>
          :
          <FlatList
          data ={userList}
          renderItem = {renderUser}
        />
        }
          </View>
       </SafeAreaView>
  ); 
}


export default App; 