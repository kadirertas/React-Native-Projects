import { StyleSheet, Dimensions } from "react-native";
import StyleLibrary from "../StyleLibrary/styleLibrary";


export default StyleSheet.create({


    buttonContainer : {
        width:StyleLibrary.windowWidth*(8/10), 
        height :StyleLibrary.windowHeight/9, 
        borderRadius: 22, 
        backgroundColor: StyleLibrary.buttonBackgroundcolor,
        justifyContent: 'center', 
        alignItems:'center',
        marginTop: 15,
    }, 
    buttonTitle: {
       fontSize: 20 , 
       fontWeight: 'bold', 
       color: 'white', 

    }
}); 