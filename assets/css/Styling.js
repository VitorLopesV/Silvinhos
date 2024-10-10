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
    },
    // Styles do Card:
    cardOfWineContainer: {
      flexDirection: 'row', 
      backgroundColor: '#661923',
      marginVertical: 12,
      marginLeft: 25,
      borderRadius: 7,
      alignItems: 'center',
      width: 322, 
      height: 110,
    },
    imageWine: {
      width: 125,
      height: 125,
      borderRadius: 300,
      position: 'absolute', 
      left: -32,
    },
    infoOfWineContainer: {
      marginLeft: 125,
      justifyContent: 'center',
    },
    nameWine: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    detailsOfWine: {
      fontSize: 16,
      color: '#DCDCDC',
      marginBottom: 2,
    },
    // MODAL CARDS
    roundButton: {
      width: 40, 
      height: 40, 
      borderRadius: 7, 
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 10,
      right: 10,
    },    
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 300,
      padding: 20,
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
      fontWeight: 'bold',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    modalButton: {
      flex: 1,
      padding: 10,
      marginHorizontal: 5,
      backgroundColor: '#007BFF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });

  export default Styling;