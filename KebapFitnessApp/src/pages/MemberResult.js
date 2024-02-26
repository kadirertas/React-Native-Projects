import React from "react";
import { SafeAreaView , Text, StyleSheet} from "react-native";


function App (props) 
{

   const {user} = props.route.params; 
    return(
         <SafeAreaView style={styles.Container}>
            <Text style= {styles.title}>Kayıt Tamamlandı</Text>
            <Text style={styles.Label} > <Text style= {styles.label2}>Kullanıcı Adı:</Text>  {user.user_name} </Text>
            <Text style={styles.Label} > <Text style= {styles.label2}>Kullanıcı Soyadı:</Text>  {user.user_surname} </Text>
            <Text style={styles.Label} > <Text style= {styles.label2}>Kullanıcı Yaşı:</Text>  {user.user_Age} </Text>
            <Text style={styles.Label} > <Text style= {styles.label2}>Kullanıcı E-maili :</Text>  {user.user_mail} </Text>
            <Text style={styles.Label} > <Text style= {styles.label2}>Kullanıcı Memleketi:</Text>  {user.user_homeTown} </Text>
         </SafeAreaView>
    );
 }


 const styles = StyleSheet.create({
             
                 title: 
                 {
                  fontSize: 30 ,
                  fontWeight:'bold',
                  margin :15,
                  color: 'red', 
                 }, 
                 Container: {
                  flex: 1 , 
                  justifyContent: 'center', 
                  alignItems: 'center'
                 }, 
                 Label: {
                  fontSize: 15 ,
                  fontWeight:'bold',
                  margin :15, 
                  color: 'black'
                 },
                 label2: {
                  fontSize: 20 ,
                  fontWeight:'bold',
                  margin :15,
                  color: 'red', 
                 }
 });


 export default App ; 