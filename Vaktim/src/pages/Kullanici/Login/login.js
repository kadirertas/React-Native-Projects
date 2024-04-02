import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import LottieFiles from "../../../component/LottieFile/lottieFile";
import styles from './login.style'; 
import { Formik } from "formik";
import CustomInput from "../../../component/CustomInput/customInput";
import CustomButton from "../../../component/CustomButton/customButton";
import NavigateToRoute from "../../../Funciton/NavigationFunciton/navigationFunction";
import LoginFunciton from "../../../Funciton/LoginFunciton/loginFunciton";
import { useDispatch } from 'react-redux';
function Login ({navigation}) {
    const dispatch = useDispatch();
    const HandlePress = () => {
        NavigateToRoute({ routeName: 'SignUpScreen', navigation: navigation });
    }

    const assets = require("../../../assets/LottieJson/Login3.json");

    const HandleLogin = (values) => {
      LoginFunciton({values, navigation})
      .then(userData => {
 
        console.log('Kullanıcı Bilgileri:', userData);
       
        dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
    })
    .catch(error => {
        console.log(error);
    });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.lottieContainer}> 
                <LottieFiles width={'100%'} height={'70%'} assets={assets} />
            </View>
            <View style={styles.formContainer}>
                <Formik
                    initialValues={{ username: "", password: "" }}
                    onSubmit={(values) => HandleLogin(values)}
                >     
                    {({ handleSubmit, handleChange, values }) => (
                        <View style={styles.bodyContainer}>
                            <CustomInput
                                onType={handleChange("username")}
                                title="Kullanıcı Adı"
                                value={values.username}
                            />
                            <CustomInput
                                onType={handleChange("password")}
                                title="Şifre"
                                value={values.password}
                            />
                            <CustomButton title="Giriş Yap" onPress={handleSubmit} />
                        </View>
                    )}
                </Formik>
                <TouchableOpacity onPress={HandlePress}>
                    <Text>Hesabın yok mu? Kaydol</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Login;
