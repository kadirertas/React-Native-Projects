import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from "react-native"; // Alert import edildi
import styles from './customUserForm.style'; 
import { Formik } from "formik";
import CustomInput from "../CustomInput/customInput";
import CustomButton from "../CustomButton/customButton";
import { useSelector } from 'react-redux';

function CustomUserForm ({ onPress, ButtonTitle}) {
  const user = useSelector(state => state.user);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    if (user) {
      setIsAdmin(user.admin);
    } else {
      setIsAdmin(null);
    }
  }, [user]);

  const validateForm = (values) => {
    if (!values.username || !values.password || !values.email || !values.nameSurname) {
      Alert.alert("Uyarı", "Lütfen tüm alanları doldurunuz.");
      return false; // Formun submit edilmesini engellemek için false döndürülür
    } else
    {
      return true; 
    }
    
  };

  const validateEmail = (email) => {
    // Basit bir e-posta doğrulama işlemi
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <SafeAreaView style={styles.signUpContainer}>

      <Formik
        initialValues={{
          nameSurname: user ? user.name : '',
          username: user ? user.username : '',
          password: user ? user.password : '',
          email: user ? user.mail : '',
          admin: user ? user.admin : null,
          id: user ? user.id : null,
        }}
        onSubmit={(values) => {
          values.admin = isAdmin; 
          onPress(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <View style={styles.bodyContainer}>
            <CustomInput
              onType={handleChange("nameSurname")}
              title="İsim Soyisim"
              value={values.nameSurname}
            />
            <CustomInput
              onType={handleChange("username")}
              title="Kullanıcı Adı"
              value={values.username}
            />
            <CustomInput
              onType={handleChange("email")}
              title="E-mail Adresi"
              value={values.email}
            />
            <CustomInput
              onType={handleChange("password")}
              title="Şifre"
              value={values.password}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
              <TouchableOpacity style={styles.radioButtonContainer} onPress={() => setIsAdmin(true)}>
                <Text style={{ color: isAdmin ? 'blue' : 'white', fontWeight: 'bold' }}>Admin</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.radioButtonContainer} onPress={() => setIsAdmin(false)}>
                <Text style={{ color: !isAdmin ? 'blue' : 'white', fontWeight: 'bold' }}>Kullanıcı</Text>
              </TouchableOpacity>
            </View>
            <CustomButton title={ButtonTitle} onPress={() => {
              // Önce formun doğruluğunu kontrol et
              if (validateForm(values)) {
                // Doğrulama başarılı ise onPress fonksiyonunu çağır
                handleSubmit();
              }
            }} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default CustomUserForm;
