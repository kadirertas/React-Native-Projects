import React, {useState} from "react";
import { Alert , SafeAreaView, } from "react-native";
import CustomButton from "../components/Button/Button";
import CustomTexInput from "../components/Input/input";

function MemberSign ({navigation} ) 
{
    const [user_name , SetUser_Name] = useState(null); 
    const [user_surname , SetUser_Surname]= useState(null); 
    const [user_Age , SetUser_Age] = useState(null); 
    const [user_mail , SetUser_Mail] = useState(null); 
    const [user_homeTown , SetUser_HomeTown] = useState(null); 


   function HandleSubmit ()
   {
    if ( !user_name   || !user_surname || !user_Age||   !user_mail ||   !user_homeTown )
    {
      Alert.alert("Kebap Fitness Salonu ", "Lütfen Tüm Alanları Eksiksiz Doldurum"); 

    }    
   else
   {
    const user ={
        user_name, 
        user_surname, 
       user_Age,
        user_mail, 
        user_homeTown
    };
    navigation.navigate('MemberResultScreen', {user}); 
   }


   }


    return(

        <SafeAreaView>
            <CustomTexInput  Label={"Üye Adı"}  Placeholer={"Üyenin İsmini Giriniz"} OnChangeText={SetUser_Name}/>
            <CustomTexInput  Label={"Üye Soyadı"}  Placeholer={"Üyenin Soyismini Giriniz"} OnChangeText={SetUser_Surname}/>
            <CustomTexInput  Label={"Üye Yaşı"}  Placeholer={"Üyenin Yaşını Giriniz"} OnChangeText={SetUser_Age}/>
            <CustomTexInput  Label={"Üye E-posta"}  Placeholer={"Üyenin E-posta Adresini Giriniz"} OnChangeText={SetUser_Mail}/>
            <CustomTexInput  Label={"Üye Memleketi"}  Placeholer={"Üyenin Yaşadığı Memleketi Giriniz"}OnChangeText={SetUser_HomeTown}/>
             <CustomButton 
             
                  text={"Kaydı Tamamla"}
                  onPress={HandleSubmit}
             
             />
        </SafeAreaView>

    );
}

export default MemberSign; 