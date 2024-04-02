import { StyleSheet } from "react-native";
import StyleLibrary from "../../component/StyleLibrary/styleLibrary";


export default StyleSheet.create({


     
  Container: 
  {
    flex:1, 
    backgroundColor: StyleLibrary.newsBackgroundColor,
  },
  newsTitleContainer:
  {
       marginTop:15,  
       width: StyleLibrary.windowWidth, 
       alignItems:'center' ,


  }, 
  newsTitle:
  {
    fontSize: 30 , 
    fontFamily: StyleLibrary.titleFontFamily, 
    color: 'white'
  }

}); 