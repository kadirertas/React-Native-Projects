import { StyleSheet } from "react-native";
import StyleLibrary from "../../component/StyleLibrary/styleLibrary";


export default StyleSheet.create({

 container  : 
 {
        flex: 1, 
        backgroundColor: StyleLibrary.welcomeBackgroundColor,
        
        
 },
 buttonContainer: 
 {
       width: StyleLibrary.windowWidth, 
       alignItems: 'center'
 },
 titleContainer: 
 {
      marginTop: -120, 
      marginBottom: 40, 
       width: StyleLibrary.windowWidth, 
       alignItems: 'center'
 },
 title:{
      fontFamily: StyleLibrary.titleFontFamily,
      fontSize: 30,

      color: StyleLibrary.titleBackgroundColor
 }, 

}); 

