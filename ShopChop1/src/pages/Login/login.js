import React, { useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";
import styles from './login.style';
import CustomInput from "../../components/Input/input";
import CustomButton from "../../components/Button/button";
import LoginAnimate from "../../components/LoginAnimations/loginAnimation";
import { Formik } from "formik";
import usePost from "../../hooks/usePost";
import Config from "react-native-config"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

const Login = ({navigation}) => {
    const [loginIconVisible, setLoginIconVisible] = useState(true);
    const dispatch = useDispatch(); // useDispatch hook'unu ekledik

    const { data, loading, error, post } = usePost();

    const handleLogin = (values) => {
        post(Config.ApiAuthKey + "/login", values); 
    }

    // Eğer data varsa ve kullanıcı girişi başarılıysa, kullanıcıyı sakla ve ProductsScreen'e yönlendir
    if (data) {
        // Kullanıcıyı saklamak için dispatch kullan
        dispatch({ type: 'SET_USER', payload: data }); // data'ya dikkat et
        // Yönlendirme yap
        navigation.navigate("ProductsScreen"); 
    }

    if (loginIconVisible) {
        return (
            <SafeAreaView style={styles.AllPage}>
                 <LoginAnimate/> 
                 <Formik
                      initialValues={{ username: "", password: "" }}
                      onSubmit={handleLogin}
                 >                    
                      {({ handleSubmit, handleChange, values }) => (
                        <View style={styles.body_Container}>
                          <CustomInput
                            onType={handleChange("username")}
                            title="Kullanıcı Adı"
                            value={values.username}
                            iconName="account"
                            textVisible={false}
                          />
                          <CustomInput
                            onType={handleChange("password")}
                            title="Şifre"
                            value={values.password}
                            iconName="account-key"
                            textVisible={true}
                          />
                          <CustomButton text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                        </View>
                      )}
                   </Formik>

            </SafeAreaView>
        );
    } 
};

export default Login;
