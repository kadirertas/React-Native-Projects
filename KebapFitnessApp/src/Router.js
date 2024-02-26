import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeComponent from "./pages/Welcome"; 
import MemberSignComponent from './pages/MemberSign'; 
import MemberResultComponent from './pages/MemberResult'; 
const Stack = createNativeStackNavigator(); 

function App() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
                <Stack.Screen name="WelcomeScreen" component={WelcomeComponent} />
            <Stack.Screen name="MemberSignScreen" component={MemberSignComponent} />
            <Stack.Screen name="MemberResultScreen" component={MemberResultComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;



