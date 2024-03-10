import React from "react";
import { SafeAreaView, Text, View, Button } from "react-native";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
const initialState =  {   counter : 0 ,     }


function reducers ( state , action )
{
  switch (action.type) {
    case 'UPDATE_VALUE':
      return{...state , counter: state.counter+1};
  
    default:
      return state;
  }
}
export default App = () => 
{
  return(
    <Provider store={createStore(reducers, initialState)}>
    <SafeAreaView style ={{flex: 1 , }}>
       <First/>
       <Second/>
    </SafeAreaView>
    </Provider>
  ); 
}


function First () { 
  const counter = useSelector (selector => selector.counter); 
  const dispatch = useDispatch(); 

   const handleUpdate = () =>
   {
    dispatch({type: 'UPDATE_VALUE'});
   }
  return (
    <View style ={{flex: 1 , backgroundColor :'#eceff1'}}>
      <Text style ={{margin: 50,color: 'black', fontSize:25,fontWeight :'bold' }}>First:{counter} </Text>
      <View style={{marginLeft: 120, width: 150 , height: 50 }}>
         <Button color={'orange'} title="Update Number" onPress={ handleUpdate}/>
    </View>
    </View>
  )
}
function Second () { 
  const counter = useSelector (selector => selector.counter); 
  return (
    <View style ={{flex: 1 , backgroundColor :'green'}}>
      <Text style ={{margin: 50, color: 'black', fontSize:25,fontWeight :'bold' }}>
        Second: {counter}
      </Text>
    </View>
  )
}