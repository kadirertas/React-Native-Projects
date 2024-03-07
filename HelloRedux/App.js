import React, { useDebugValue } from "react";
import {SafeAreaView, View, Text ,Button} from "react-native";
import { createStore } from "redux";
import { Provider , UseSelector ,UseDispatch, useSelector, useDispatch } from "react-redux";
const InitialState = 
{
  counter: 1,
}

function reducers ( state  ,action )
{
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return{... state ,counter: state.counter+1 };
      
  
    default:
      return state; 
      
  }
}

function App () 
{
  return(
    
         <Provider  store={createStore(reducers, InitialState)}>
    <SafeAreaView style={{flex:1}}>

      <First />
      <Second/>     
    </SafeAreaView>
    </Provider>
  ); 
}
export default App; 
function First () 
{

  const counter = useSelector(selector => selector.counter); 
  const dispacth = useDispatch(); 

  const handleUpdate =( ) =>{
    dispacth({type: 'UPDATE_COUNTER'})
  } 
  return(
    
 <View style= {{flex:1, backgroundColor: '#eceff1'}}>
    <Text style={{color: 'black', fontSize:35, margin:50, fontWeight:'bold'}}>
      First: {counter}
    </Text>
    <View style={{marginLeft: 120, width: 150 , height: 50 }}>
         <Button color={'orange'} title="Update Number" onPress={ handleUpdate}/>
    </View>
 
 </View>
  ); 
  }
  function Second () 
{

  const counter = useSelector(selector => selector.counter);
  return(
    

    <View style= {{flex:1, backgroundColor: 'green'}}>
      <Text style={{color: 'black',fontSize:35, margin:50, fontWeight:'bold'}}>
         Second: {counter}
      </Text>
   </View>
  ); 


  }