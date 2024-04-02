import { StyleSheet } from "react-native";
import StyleLibrary from "../StyleLibrary/styleLibrary";



export default StyleSheet.create({
    
    Container: 
    {
           flex: 1, 
           alignItems:'center'
        
    }, 
    newsContainer: 
    {
        borderRadius: 12,
     
        backgroundColor: "#e0e0e0",
        margin:10, 

       
        width: StyleLibrary.windowWidth*(8/10),
       
    }, 
    image : {
        marginTop: 8,
        width: StyleLibrary.windowWidth*(8/10),
        height: StyleLibrary.windowWidth*(2/5),
        resizeMode: 'stretch'
       
        
    }, 

    title:{
        margin:10,
        fontWeight:'bold',
        fontSize:18,
        color :'red'

    },
    shortDescription: {
        padding: 12,
        fontSize:16,
        fontStyle:'italic',
        color :'black'
        
    },
    bottomButtonsContainer:{
        flexDirection: 'row',
        width: '100%', 
        justifyContent: 'flex-end',
    },
    icon: 
    {
        padding: 7,
    }


    
}); 