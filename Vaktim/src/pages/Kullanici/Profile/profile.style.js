import { StyleSheet } from "react-native";
import StyleLibrary from "../../../component/StyleLibrary/styleLibrary";



export default StyleSheet.create({
      
    container: {

        flex: 1, 
        backgroundColor: StyleLibrary.formBackgroundColor,
        alignItems: 'center', 

    },
    userInfo: 
    {
           fontSize: 20 ,
           color:'white', 
           fontWeight:'bold', 

    },
    title: 
    {
           fontSize: 30 ,
           color:'white', 
           fontFamily: StyleLibrary.titleFontFamily,
           marginBottom: 20 
           
    },
    profileContainer: 
    {
       
        width: StyleLibrary.windowWidth,
        alignItems: 'center'
    },
    profileInfo:
    {
      
        padding: 10, 
        flexDirection :'row', 
        alignItems: 'flex-start',
       
        backgroundColor: StyleLibrary.inputBackgroundcolor, 
        borderRadius: 20 ,
        marginBottom: 20 , 
    }

}); 