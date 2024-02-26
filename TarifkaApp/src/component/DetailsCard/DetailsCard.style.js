import { StyleSheet ,Dimensions} from "react-native";


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F2F2F2'
    },
    image:{
        height:Dimensions.get('window').height/3,
        width:Dimensions.get('window').width,
    },
    titleContainer:
    {
        borderBottomWidth: 1, 
        borderColor: 'black'
    }, 
    title : 
    {
        color:"#990000",
        fontSize:37,
        fontWeight:"bold",
     
    },
    smallTitle:{
      
            color:"#990000",
            fontSize:27,
            fontWeight:"bold",
         
      
    },
    desc: 
   {
    fontWeight:"bold",
    paddingLeft:5,
    color: 'black',
   },
    Button:{
        backgroundColor:"red",
        padding:5,
        borderRadius:5,
        marginHorizontal:10,        
    },

}); 