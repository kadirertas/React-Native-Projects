import React from "react";
import { SafeAreaView, View, Text, StyleSheet,Button } from 'react-native';

function First(props) {
  
  function navigateToPage () 
  {
    props.navigation.navigate('SecondScreen', {
     username: 'Kadir._.Ertas',
      surname: 'Ertas', 
    });
    
  }
  return (

    <SafeAreaView style={styles.AllPage}>
      <View style={styles.Container}>
        <Text style={styles.Text}>
          Merhabalar React Navigation'da ilk sayfadasın
        </Text>
        <Button
        title="İkinci Sayfa İçin Tıkla"
        onPress={navigateToPage }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AllPage: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 150,
    backgroundColor: '#123456',
  },
  Text: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default First;
