import React from "react";
import { NavigationContainer } from '@react-navigation/native';                 

import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Member from "./pages/Member/Member";
import MemberDetails from "./pages/Member/MemberDetails";
import MemberUpdate from "./pages/Member/MemberUpdate";

import Profile from "./pages/Profile/Profile";
import ProfileEdit from "./pages/Profile/ProfileEdit";

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator(); 
const drawer = createDrawerNavigator(); 

const MemberStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Member" component={Member} />
      <Tab.Screen name="MemberDetails" component={MemberDetails} />
      <Tab.Screen name="MemberUpdate" component={MemberUpdate} />
    </Tab.Navigator>
  ); 
}

const ProfileStack = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="ProfileEdit" component={ProfileEdit} />
   </Tab.Navigator>
  ); 
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MemberStack} />
        <Tab.Screen name="Settings" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
