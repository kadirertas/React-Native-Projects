import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./pages/Categories";
import Foods from "./pages/Foods";
import Details from "./pages/Details";


const Stack = createNativeStackNavigator();

function Router() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Categories Screen" component={Categories}></Stack.Screen>
        <Stack.Screen name="Foods Screen" component={Foods}></Stack.Screen>
        <Stack.Screen name="Details Screen" component={Details}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
