import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from './newsAdd.style'; 
import NavigateToRoute from "../../../Funciton/NavigationFunciton/navigationFunction";
import NewsAddFunction from "../../../Funciton/NewsAddFunction";
import CustomNewsForm from "../../../component/CustomNewsForm";

function NewsAdd ({navigation}) {

  const handleNewsAdd = (values, ) => {
    NewsAddFunction({values});
    NavigateToRoute({routeName:"NewsScreen", navigation:navigation})
  }

  return (
    <SafeAreaView style={styles.newsAddContainer}>
      <Text style={styles.newsAddTitle}>Haber Ekle</Text>
     
     <CustomNewsForm onPress={handleNewsAdd}/>
    </SafeAreaView>
  );
}

export default NewsAdd;


/*
 <Formik
  initialValues={{ 
    newsTitle: '', 
    shortDesc: '', 
    longDesc: '', 
    imageSource: '' 
  }}
  onSubmit={(values) => handleNewsAdd(values)}
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
      </Formik>*/