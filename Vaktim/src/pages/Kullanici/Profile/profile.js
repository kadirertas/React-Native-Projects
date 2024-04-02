import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Fontisto';
import styles from './profile.style';
import CustomButton from '../../../component/CustomButton';
import CustomInput from '../../../component/CustomInput';
import NavigateToRoute from '../../../Funciton/NavigationFunciton/navigationFunction';

const Profile = ({ navigation }) => {
  const user = useSelector(state => state.user);
  const [password, setPassword] = useState('');
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordInputVisible, setIsPasswordInputVisible] = useState(false);

  const gotonavigation = (path) => {
    NavigateToRoute({ routeName: path, navigation: navigation }); 
}




  const handleChangePassword = (newPassword) => {
    setPassword(newPassword);
  };

  const handleProfileUpdate = () => {
    
      NavigateToRoute({ routeName: 'UpdateUser', navigation });
      setPassword('');
  
  };

  const handlePasswordCheck = () => {
    const correctPassword = user.password; 
    if (password === correctPassword) {
      setPasswordCorrect(true);
      setErrorMessage('');
      setIsPasswordInputVisible(false);
      handleProfileUpdate();
    } else {
      setPasswordCorrect(false);
      setErrorMessage('Şifreniz hatalı, lütfen tekrar deneyin.');
      setPassword('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={false}>
        <View style={styles.profileContainer}>
          <Icon style={{ marginTop: 45 }} name="person" size={100} color="white" />
          <Text style={styles.title}>Profil Bilgileri</Text>

          <View style={styles.profileInfo}>
            <Text style={[styles.userInfo, { color: '#152696' }]}>Kullanıcı Adı:</Text>
            <Text style={styles.userInfo}>{user.username}</Text>
          </View>

          <View style={styles.profileInfo}>
            <Text style={[styles.userInfo, { color: '#152696' }]}>Adı Soyadı: </Text>
            <Text style={styles.userInfo}>{user.name}</Text>
          </View>

          <View style={styles.profileInfo}>
            <Text style={[styles.userInfo, { color: '#152696' }]}>Email: </Text>
            <Text style={styles.userInfo}> {user.mail}</Text>
          </View>

          <CustomButton title={"Profili Güncelle"} onPress={() => setIsPasswordInputVisible(true)} />

          {isPasswordInputVisible && (
            <View style={styles.passwordContainer}>
              <Text style={styles.userInfo}>{errorMessage}</Text>
              <CustomInput
                onType={handleChangePassword}
                title="Şifre"
                secureTextEntry={true}
                value={password}
              />
              <CustomButton title="Doğrula" onPress={handlePasswordCheck} />
            </View>
          )}
                        {user.admin ? (
                            <View style = {styles.profileContainer}>
                              <CustomButton title="Haber Yükle" onPress={() => gotonavigation("NewsAddScreen")} />
                              <CustomButton title="Duyuru Yükle" onPress={() => gotonavigation("AnnouncementsAddScreen")} />
                              
                            </View>
                          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
