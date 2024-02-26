import React from "react";
import LottieView from "lottie-react-native";
function Fault ()
{
    return <LottieView source={require("../../assets/error.json")}
    style={{width: "100%", height: "100%"}}
    autoPlay
     />
}
export default Fault; 