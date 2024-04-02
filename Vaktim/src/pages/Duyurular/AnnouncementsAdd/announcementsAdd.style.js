import { StyleSheet } from "react-native";
import StyleLibrary from "../../../component/StyleLibrary/styleLibrary";



export default StyleSheet.create({

    newsAddContainer: {
    backgroundColor:StyleLibrary.loginBackgroundColor,
     flex:1,
      justifyContent: 'center', 
      alignItems: 'center'
  } ,
  newsAddTitle: 
  {
    color: StyleLibrary.titleColor,
    fontFamily: StyleLibrary.titleFontFamily,
    fontSize: StyleLibrary.titleFont
  } 
});