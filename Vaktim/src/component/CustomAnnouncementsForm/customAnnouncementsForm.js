import React from "react";
import { SafeAreaView, View, Text, Alert } from "react-native"; // Alert import edildi
import { Formik } from "formik";
import CustomInput from "../CustomInput/customInput";
import CustomButton from "../CustomButton/customButton";
import styles from './customAnnouncementsForm.style'; 

function CustomAnnouncementsForm({ onPress }) {

    const initialValues = { Title: '', Description: '' };

    const validateForm = (values) => {
        if (!values.Title || !values.Description) {
            Alert.alert("Uyarı", "Lütfen tüm alanları doldurunuz.");
            return false; // Formun submit edilmesini engellemek için false döndürülür
        }
        return true; // Doğrulama başarılı ise true döndürülür
    };

    return (
        <SafeAreaView>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    // Önce formun doğruluğunu kontrol et
                    if (validateForm(values)) {
                        // Doğrulama başarılı ise onPress fonksiyonunu çağır
                        onPress(values);
                    }
                }}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.bodyContainer}>
                        <CustomInput
                            onType={handleChange("Title")}
                            title="Duyuru Başlığı"
                            value={values.Title}
                        />

                        <CustomInput
                            onType={handleChange("Description")}
                            title="Duyuru Açıklama"
                            value={values.Description}
                        />

                        <CustomButton title="Duyuru Ekle" onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    );
}

export default CustomAnnouncementsForm;
