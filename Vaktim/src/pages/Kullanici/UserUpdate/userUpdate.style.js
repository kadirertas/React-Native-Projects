import { StyleSheet } from "react-native";
import StyleLibrary from "../../../component/StyleLibrary/styleLibrary";



export default StyleSheet.create({

    signUpContainer: {
    backgroundColor:StyleLibrary.loginBackgroundColor,
     flex:1,
      justifyContent: 'center', 
      alignItems: 'center'
  } ,
  signUpTitle: 
  {
    color: StyleLibrary.titleColor,
    fontFamily: StyleLibrary.titleFontFamily,
    fontSize: StyleLibrary.titleFont
  },
  radioButtonContainer: 
  {
    backgroundColor: StyleLibrary.radioButtonBackgroundColor,
  padding: 20, 
    borderRadius: 20 }
});