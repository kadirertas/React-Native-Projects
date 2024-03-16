import React from "react";
import { SafeAreaView , Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Products from "./pages/Products";
import Datails from "./pages/Datails";


const Stack = createStackNavigator(); 

function Router() {
  const userSession = useSelector(s => s.user);

  return (
    <NavigationContainer>
      {!userSession ? (
       // Kullanıcı oturum açmışsa
        <Stack.Navigator>
          <Stack.Screen
            name="ProductsScreen"
            component={Products}
            options={{
              title: 'Dükkan',
              headerStyle: { backgroundColor: "#90caf9" },
              headerTitleStyle: { color: 'white' }
            }}
          />
          <Stack.Screen
            name="DetailsScreen"
            component={Datails}
            options={{
              title: 'Detay',
              headerStyle: { backgroundColor: "#90caf9" },
              headerTitleStyle: { color: 'white' },
              headerTintColor: 'white'
            }}
          />
        </Stack.Navigator>
      ) : (
         // Kullanıcı oturum açmamışsa
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  ); 
}

export default Router;
