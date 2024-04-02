import React from "react";
import { SafeAreaView,  Text } from "react-native";
import styles from './signUp.style'; 
import UsersAdd from "../../../Funciton/UsersAdd";
import NavigateToRoute from "../../../Funciton/NavigationFunciton/navigationFunction";
import CustomForm from "../../../component/CustomUserForm";


function SignUp ({navigation}) {


  const handleUsersAdd = (values) => {
    UsersAdd({ values});
    NavigateToRoute({ routeName: "LoginScreen", navigation: navigation });
  }

  return (
    <SafeAreaView style={styles.signUpContainer}>
      <Text style={styles.signUpTitle}>Hesap Oluştur</Text>
       <CustomForm onPress={handleUsersAdd} ButtonTitle={"Hesap Oluştur"}/>
    </SafeAreaView>
  );
}

export default SignUp;


/*      <Formik
        initialValues={{ nameSurname: '', username: '', password: '', email: '', admin: isAdmin }}
        onSubmit={(values) => handleUsersAdd(values)}
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
              <TouchableOpacity style = {styles.radioButtonContainer} onPress={() => setIsAdmin(true)}>
                <Text style={{ color: isAdmin ? 'blue' : 'white' , fontWeight: 'bold'}}>Admin</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.radioButtonContainer} onPress={() => setIsAdmin(false)}>
                <Text style={{ color: !isAdmin ? 'blue' : 'white',  fontWeight: 'bold'}}>Kullanıcı</Text>
              </TouchableOpacity>
            </View>
            <CustomButton title="Hesap Oluştur" onPress={handleSubmit} />
          </View>
        )}
      </Formik>*/