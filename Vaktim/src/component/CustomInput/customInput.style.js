import { StyleSheet } from "react-native";
import StyleLibrary from "../StyleLibrary/styleLibrary";



export default StyleSheet.create({
    
    InputContainer: 
    {
        paddingLeft: 10,
        width: StyleLibrary.windowWidth*(8/10),
        height: StyleLibrary.windowHeight/10,
        borderRadius: 12, 
        backgroundColor: StyleLibrary.inputBackgroundcolor,
        marginTop: 15, 
        justifyContent:'center',
    },
    InputTitle: 
    {
        color : 'white', 
        fontSize: 20 , 
        fontWeight: 'bold', 

    }


}); 