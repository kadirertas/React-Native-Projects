import React from "react";
import LottieView from "lottie-react-native";
function Loading ()
{
    return <LottieView source={require("../../assets/loadingb.json")}
    style={{width: "100%", height: "100%"}}
    autoPlay
     />
}
export default Loading; 