import database from '@react-native-firebase/database';
import NavigateToRoute from '../NavigationFunciton/navigationFunction';

const LoginFunction = ({ values, navigation }) => {
    const { username, password } = values;
    console.log("Giriş bilgileri:", username, password);

    const checkUserCredentials = (username, password) => {
        return new Promise((resolve, reject) => {
            database().ref('users').once('value')
                .then(snapshot => {
                    snapshot.forEach(childSnapshot => {
                        const userId = childSnapshot.key;
                        const userData = childSnapshot.val();
                        if (userData.username === username && userData.password === password) {
                            resolve(userData);
                        }
                    });
                    reject("Kullanıcı adı veya şifre yanlış");
                })
                .catch(error => {
                    reject(error.message);
                });
        });
    };

    const signIn = (username, password) => {
        return new Promise((resolve, reject) => {
            checkUserCredentials(username, password)
                .then(user => {
                    NavigateToRoute({ routeName: 'NewsMain', navigation: navigation });
                    resolve(user); 
                })
                .catch(error => {
                    reject(error);
                });
        });
    };

    // Giriş yapılıyor ve kullanıcı verileri döndürülüyor
    return signIn(username, password);
};

export default LoginFunction;
