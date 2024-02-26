import { StyleSheet } from "react-native";




export default StyleSheet.create 
({
    Container: 
    {
        padding: 10 , 
        flexDirection: 'row', 

    }, 
    image: 
    {
        height: 100 , 
        width:100 , 
        borderRadius: 50 ,
    }, 
    inner_Container:
    {
        padding: 10 , 
        flex: 1, 
        justifyContent: 'center', 


    }, 
    title : 
    {
        fontSize: 27 , 
        fontWeight: 'bold', 
    }, 
    info_Container : 
    {
        flex: 1, 
         flexDirection: 'row', 
         alignItems: 'center', 
    }, 
    artist: {}, 
    year: {
        fontSize: 12,
        marginLeft: 10 , 
        color : 'gray', 
        fontWeight: 'bold',
    }, 
    soldOutContainer : 
    {
        borderWidth: 1 , 
        borderColor: 'red', 
        borderRadius: 5 , 
        padding: 6, 
    }, 
    soldOutTitle : 
    {
        fontSize: 15 , 
        color: 'red', 
        fontWeight: 'bold',
    }, 

    contentContianer : { flexDirection: 'row'}, 

}); 