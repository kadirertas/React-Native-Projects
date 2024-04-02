import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles from './customNewsForm.style'; 
import { Formik } from "formik";
import CustomInput from "../../component/CustomInput/customInput";
import CustomButton from "../../component/CustomButton/customButton";



function CustomNewsForm ({onPress})
{
    return(
        <SafeAreaView>
             <Formik
  initialValues={{ 
    newsTitle: '', 
    shortDesc: '', 
    longDesc: '', 
    imageSource: '' 
  }}
  onSubmit={(values) => onPress(values)}
>
  {({ handleSubmit, handleChange, values }) => (
    <View style={styles.bodyContainer}>
      <CustomInput
        onType={handleChange("newsTitle")}
        title="Haber Başlığı "
        value={values.newsTitle}
      />
      <CustomInput
        onType={handleChange("shortDesc")}
        title="İlgi Çekici 1-2 cümle açıklama "
        value={values.shortDesc}
      />
      <CustomInput
        onType={handleChange("longDesc")}
        title="Gerçek Açıklama"
        value={values.longDesc}
      />
      <CustomInput
        onType={handleChange("imageSource")}
        title="Üsten Habere Ait resmi seç "
        value={values.imageSource}
      />
      <CustomButton title="Haberi Ekle " onPress={handleSubmit} />
    </View>
  )}
      </Formik>
        </SafeAreaView>
    ); 
}

export default CustomNewsForm; 