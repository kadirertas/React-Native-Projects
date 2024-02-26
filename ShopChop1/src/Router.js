import React from "react";
import { SafeAreaView , Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "./pages/Products";
import Datails from "./pages/Datails";

const Stack = createStackNavigator(); 

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsScreen" component={Products} options={
          {title: 'Dükkan ', 
           headerStyle : {backgroundColor :"#90caf9"},
           headerTitleStyle: {color :'white'}
             
        }
        }></Stack.Screen>                 
        <Stack.Screen name="DetailsScreen" component={Datails} options={
          {title: 'Detay ', 
           headerStyle : {backgroundColor :"#90caf9"},
           headerTitleStyle: {color :'white'},
           headerTintColor: 'white'
             
        }
        }></Stack.Screen>   
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

export default Router; 
