import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Primary from "./pages/primary";
import Secondary from "./pages/secondary";
import UserProvider from "./context/provider";


const Tab = createBottomTabNavigator (); 



const Router = () =>
{
  return(
         <UserProvider>
        <NavigationContainer>
          <Tab.Navigator>
          <Tab.Screen name="PrimaryScreen" component={Primary}></Tab.Screen>
          <Tab.Screen name="SecondaryScreen" component={Secondary}></Tab.Screen>
          </Tab.Navigator>
         </NavigationContainer>
         </UserProvider>
  ); 
}


export default Router; 