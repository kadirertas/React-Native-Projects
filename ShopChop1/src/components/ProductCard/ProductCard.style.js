import { StyleSheet } from "react-native";



export default StyleSheet.create({
    
    Container: 
    {
        borderWidth: 1, 
        borderColor :'#bdbdbd', 
        backgroundColor: "#e0e0e0",
        margin:10, 
        flexDirection:"row",
    }, 
    image : {
        width: 100, 
        minHeight:100,
        resizeMode:'contain',  //resmi verilen boyutlara göre orjinal haline sadık kalarak ayarlar 
        backgroundColor:'white'
    }, 
    bodyContainer: {
        padding:5,
        flex:1,
        justifyContent:'space-between',


    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        color :'black'

    },
    price: {
        textAlign:'right',
        fontSize:16,
        fontStyle:'italic',
        color :'black'
        
    },

    
}); 