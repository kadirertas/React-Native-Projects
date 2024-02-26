import {StyleSheet,Dimensions} from "react-native"

export default StyleSheet.create({
    allPage: {
        flex:1, 
        backgroundColor: '#FFA600'
    },
    
    container:{
        margin:5,
        flex:1, 
    },
    image:{
        minHeight:Dimensions.get('window').height/3,
        minWidth:Dimensions.get('window').width/3,
        justifyContent:"flex-end",
        resizeMode:"cover",
        overflow: 'hidden',
        borderRadius:15
    },
    title:{
        color: 'white',
        lineHeight: 55,
        fontWeight: 'bold',
        textAlign:"center",
        fontSize: 25,
        backgroundColor: '#000000c0',
    }
})