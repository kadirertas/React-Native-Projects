import database from '@react-native-firebase/database';

const UserUpdateFunction = ({ values }) => {
  const { nameSurname, username, email, password, admin ,id} = values;

 


  database()
    .ref(`/users/${id}`)
    .update({
      admin: admin,
      id: id, 
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



export default UserUpdateFunction;
