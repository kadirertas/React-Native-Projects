import React,{useState} from "react";
import { SafeAreaView, Text, TextInput, Button, View, } from "react-native";
import { useDispatch, useSelector } from "react-redux";

 const Primary=  ( ) => 
{
     const [text, SetText] =useState(""); 
     const [user, SetUser] = useState (""); 
       

    const dispatch = useDispatch(); 

     const handleAdd= ()=>{

        dispatch({type: 'ADD_NAME', payload: {name : text}});
     }
     const handleDelete= ()=>{

        dispatch({type: 'CLEAN_LIST'});
     }
     const handleUserAdd= ()=>{

        dispatch({type: 'USERNAME_ADD', payload:{user}})
     }
    return (
        <SafeAreaView style={{flex: 1 , display: 'flex' ,alignItems: 'center', justifyContent: 'center' }}>
            <Text style= {{fontSize: 35, color: 'black', fontWeight: 'bold'}}>Hello Primary</Text>
            <View style = {{borderWidth: 1 , borderColor: 'black', margin: 10 ,width: 350, padding: 5 }}>
                   <TextInput 
                        value={text}
                        onChangeText={SetText}
                        placeholder="Lütfen İsminizi Giriniz"
                    />
            </View>
            <View style= {{width: 100 , marginBottom: 10 , marginTop: 10,width: 350 ,height: 50}}>
                <Button title=" Kaydet " onPress={handleAdd}/>
            </View>
            <View  style = {{borderWidth: 1 , borderColor: 'black', margin: 10,width: 350  , padding: 5 }}>
                <TextInput 
                    value={user}
                    onChangeText={SetUser}
                    placeholder="Kullanıcı  Adınızı Giriniz"
                />
            </View>
            <View style= {{width: 100 , marginBottom: 10 ,width: 350 , marginTop: 10 ,height: 50}}>
                <Button title=" Kullanıcıı Adını Kaydet " onPress={handleUserAdd}/>
            </View>
            <View style= {{width: 100 , marginBottom: 10 ,width: 350 , marginTop: 10 ,height: 50}}>
                <Button title="İsim Listesini Temizle" onPress={handleDelete} color={ 'red'}/>
            </View>

        </SafeAreaView>
    ); 
}


export default Primary;