import {StyleSheet} from 'react-native';

const Styling = StyleSheet.create({
    container: {
      padding: 10,
      width: '100%',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
    },
    productButton: {
      width: 350,
      height: 45,
      marginVertical: 12,
      backgroundColor: '#661923', 
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7,
    },
    MainInterface: {
      alignItems: 'center',
      marginTop: 10,
    },
    productButtonText: {
      color: 'white',
      fontSize: 20,
    },
    drawerContainer: {
      flex: 1,
      justifyContent: 'top',
      marginTop: 20,
      padding: 14,
    },
    leftBarButton: {
      width: 250,
      height: 38,
      borderRadius: 10,
      marginBottom: 5, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#661923', 
    },
    leftBarButtonText: {
      color: 'white',
      fontSize: 20,
    },
    searchBar: {
      height: 35,
      width: '100%',
      borderColor: '#646464',
      borderWidth: 1,
      padding: 16,
      borderRadius: 5,
      backgroundColor: '#fff',
    },
    image: {
      width: 39,
      height: 39,
      marginLeft:15,
    },
    textTitle:{
      marginTop:8,
      marginBottom: 6,
      fontSize: 14,
      fontWeight:'bold',
    }
  });

  export default Styling;