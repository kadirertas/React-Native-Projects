import React from "react";
import { NavigationContainer } from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
const Stack = createNativeStackNavigator(); 

import FirstComponent from "./pages/First";
import SecondComponent from "./pages/Second";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const  Tab = createBottomTabNavigator(); 
function App() {
  return (
    /*  
                  ----------------------------------------STACK NAVİGATOR-----------------------------------------
     
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='FirstScreen' component={FirstComponent} />
        <Stack.Screen name='SecondScreen' component={SecondComponent} />
      </Stack.Navigator>
    </NavigationContainer>
    
    */

               
<NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name='FirstScreen' 
          component={FirstComponent} 
        />
        <Tab.Screen 
          name='SecondScreen' 
          component={SecondComponent} 
        />
      </Tab.Navigator>
    </NavigationContainer>
     
/*
<NavigationContainer>
<Drawer.Navigator initialRouteName="FirstScreen">
        <Drawer.Screen name='FirstScreen' component={FirstComponent} />
        <Drawer.Screen name='SecondScreen' component={SecondComponent} />
</Drawer.Navigator>
</NavigationContainer>
*/
  );
}
/* aynı anda 3 navigator olmayacağından  birini denemek istersen diğerlerini yorum satrına al aa*/
export default App;
