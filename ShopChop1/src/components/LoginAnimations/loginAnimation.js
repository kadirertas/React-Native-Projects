import React from "react";
import LottieView from "lottie-react-native";
function LoginAnimate ()
{
    return <LottieView source={require("../../assets/Login.json")}
    style={{width: "100%", height: "50%"}}
    autoPlay
     />
}
export default LoginAnimate; 
