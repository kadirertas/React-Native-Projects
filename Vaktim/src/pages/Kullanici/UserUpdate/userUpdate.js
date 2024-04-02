import { SafeAreaView, Text } from "react-native";
import styles from './userUpdate.style'; 
import UserUpdateFunction from "../../../Funciton/UsersUpdate/usersUpdateFunction";
import NavigateToRoute from "../../../Funciton/NavigationFunciton/navigationFunction";
import CustomForm from "../../../component/CustomUserForm";
import React from "react";
function UserUpdate ({ navigation , route}) {


  const handleUsersUpdate = (values) => {
    UserUpdateFunction({ values});
    NavigateToRoute({ routeName: "LoginScreen", navigation: navigation });
  } 
  return (
    <SafeAreaView style = {styles.signUpContainer}>
      <Text style={styles.signUpTitle}>Profili Güncelle</Text>
      <CustomForm  onPress={ handleUsersUpdate} ButtonTitle={"Profili Güncelle"}/>
    </SafeAreaView>
  );
}

export default UserUpdate;
