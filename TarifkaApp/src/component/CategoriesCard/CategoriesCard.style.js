import { StyleSheet } from "react-native";

export default StyleSheet.create({

    
     Container :
     {
        flex: 1, 
        backgroundColor:'#FFA500',
        
     },
     categoryPages: 
     {
      flexDirection: 'row', 
      backgroundColor: '#E6E6E6', 
      marginTop: 15, 
      borderBottomLeftRadius:60, 
      borderTopLeftRadius:60,
      display: 'flex',
      alignItems: 'center',
     }, 
     image: {
      width: 100, 
      height: 100, 
      resizeMode: 'contain',
      marginLeft: 15
     }, 
     title: 
     {
       marginLeft: 15, 
       fontSize: 15, 
       fontStyle: 'italic', 
       color: 'black',
       letterSpacing :2, 
       fontWeight: 'bold',
     },


});