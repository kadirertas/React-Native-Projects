import database from '@react-native-firebase/database';

const AnnouncementsAddFunction = ({ values }) => {
  const { Title, Description} = values;

  const generateUserId = () => {
    return Math.random().toString(36).substring(7);
  };

  const AnnouncementsId = generateUserId();

  database()
  .ref(`/Announcements/${AnnouncementsId}`)
  .set({
    id: AnnouncementsId, 
    title: Title,
    description: Description, // Doğru şekilde description kullanıldı
  })

    .then(() => {
      console.log('Data updated.');
    })
    .catch(error => console.error('Error updating data:', error));
};

export default AnnouncementsAddFunction;
