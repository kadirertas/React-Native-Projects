import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 8,
    display:'flex',
  },
  image: {
    height: 150, // Daha büyük bir yükseklik
    width: windowWidth / 2 - 30,
    justifyContent:'center'
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
