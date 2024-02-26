import React from "react";
import { SafeAreaView, View, Text, StyleSheet,Button } from 'react-native';

function Second(props) {
 /* console.log(props); */
  /*const user = props.route.params.username; 
  const {surname} = props.route.params; */

  function navigateToPage () 
  {
         props.navigation.navigate('FirstScreen');
  }
  return (
    <SafeAreaView style={styles.AllPage}>
      <View style={styles.Container}>
        <Text style={styles.Text}>
          Hello React Navigation burası İkinci Sayfa
        </Text>
        
        <Button
        title="ilk Sayfa İçin Tıklayınınız"
        onPress={ navigateToPage}        
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
    backgroundColor: '#654132',
  },
  Text: {
    color: 'yellow',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default Second;
