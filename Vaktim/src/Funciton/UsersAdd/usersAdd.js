import database from '@react-native-firebase/database';

const UsersAdd = ({ values }) => {
  const { nameSurname, username, email, password, admin } = values;


  const userId = generateUserId();

  database()
    .ref(`/users/${userId}`)
    .set({
      admin: admin,
      id: userId, 
      name: nameSurname,
      username: username,
      mail: email,
      password: password
    })
    .then(() => {
      console.log('Data updated.');
    })
    .catch(error => console.error('Error updating data:', error));  
};

// Rastgele bir kullanıcı ID'si oluşturan fonksiyon
const generateUserId = () => {
  // Kullanıcı ID'sini istediğiniz şekilde oluşturabilirsiniz, örneğin:
  return Math.random().toString(36).substring(7);
};

export default UsersAdd;
