import database from '@react-native-firebase/database';
import NavigateToRoute from '../NavigationFunciton/navigationFunction';

const NewsAddFunction = ({ values }) => {
  const { newsTitle, shortDesc, longDesc, imageSource } = values;

  const generateUserId = () => {
    return Math.random().toString(36).substring(7);
  };

  const userId = generateUserId();

  database()
    .ref(`/News/${userId}`)
    .set({
      id: userId, 
      title: newsTitle,
      shortDescription: shortDesc,
      longDescription: longDesc,
      image: imageSource
    })
    .then(() => {
      console.log('Data updated.');

    })
    .catch(error => console.error('Error updating data:', error));
};

export default NewsAddFunction;
