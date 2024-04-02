import { StyleSheet } from "react-native";
import StyleLibrary from "../../../component/StyleLibrary/styleLibrary";


export default StyleSheet.create({



    container: {
        flex: 1, 
        backgroundColor : StyleLibrary.loginBackgroundColor,
         
    },
    lottieContainer: {
        marginTop : -20,
    },
    formContainer: 
    {
        width :StyleLibrary.windowWidth,
        alignItems: 'center'
    },
    bodyContainer: 
    {
        marginTop: -120,
        backgroundColor: StyleLibrary.formBackgroundColor,
        borderRadius: 20,
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 15
    }
}); 