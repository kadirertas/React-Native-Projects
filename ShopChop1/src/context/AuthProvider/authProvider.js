import React, { useState ,useEffect } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

import AsyncStorage from "@react-native-async-storage/async-storage";


const AuthProvider = ({children}) =>
{


     const [user, SetUser] =useState(null) ; 
     const [isAuthLoading, SetAuthLoading] =useState(true); 


     useEffect ( () => {
      AsyncStorage.getItem('@USER').then(userSession => {
      
            userSession &&
                       SetUser (JSON.parse(userSession));
                  
            SetAuthLoading(false);})}, []);  
  
      return(

        <Provider store= {createStore(reducer,{user, isAuthLoading} )}>

              {children}

        </Provider>



      ); 



}



export default AuthProvider; 



