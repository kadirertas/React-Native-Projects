import React from "react";
import LottieView from "lottie-react-native";
function LottieFiles ( {assets, width, height})
{
    return (
          <LottieView source={assets} 
                      style={{ width: width, height: height }}
                      autoPlay
           />
           
           );
}
export default LottieFiles; 
