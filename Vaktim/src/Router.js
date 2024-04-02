import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux"; // Import Provider
import store from "./Funciton/Redux/store"; // Import your Redux store
import Welcome from "./pages/Welcome";
import Login from "./pages/Kullanici/Login";
import SignUp from "./pages/Kullanici/SignUp";
import News from "./pages/Haberler/News";
import Profiles from "./pages/Kullanici/Profile/profile";
import StyleLibrary from "./component/StyleLibrary/styleLibrary";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import NewsAdd from "./pages/Haberler/NewsAdd";
import FavoritesNews from "./pages/Favorites";
import UserUpdate from "./pages/Kullanici/UserUpdate";
import Announcements from "./pages/Duyurular/Announcements";
import AnnouncementsAdd from "./pages/Duyurular/AnnouncementsAdd";

function Router () {
    const Stack = createNativeStackNavigator(); 
    const Tab = createBottomTabNavigator(); 

    const AllPage = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="NewsScreen" component={News} />
            </Stack.Navigator>
        ); 
    }
    const NewsMain  = () =>
    {
      return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: StyleLibrary.buttonBackgroundcolor }
        }}
    >
        <Tab.Screen
            name="Haber Akışı"
            component={AllPage}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="newspaper" size={size} color={color} />
                ),
            }}
        />
           <Tab.Screen
            name="Favoriler"
            component={FavoritesNews}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon2 name="favorite" size={size} color={color}/>
                ),
            }}
        />
         <Tab.Screen
            name="Duyurular"
            component={Announcements}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon2 name="bell-alt" size={size} color={color} /> 
                ),
            }}  />
        <Tab.Screen
            name="Profile"
            component={Profiles}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="account-settings" size={size} color={color} /> 
                ),
            }}
        />
            
           
      
      
    </Tab.Navigator>
      ); 
    }
    return (
        <Provider store={store}> 
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                 
                    <Stack.Screen name="WelcomeScreen" component={Welcome} />
                    <Stack.Screen name="LoginScreen" component={Login} />
                    <Stack.Screen name="SignUpScreen" component={SignUp} />
                    <Stack.Screen name="NewsAddScreen" component={NewsAdd} />  
                     <Stack.Screen name="NewsMain" component={NewsMain} />
                     <Stack.Screen name="UpdateUser" component={UserUpdate} />
                     <Stack.Screen name="AnnouncementsAddScreen" component={AnnouncementsAdd} /> 
                  
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>  
    ); 
}

export default Router;
