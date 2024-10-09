import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importando o hook

const Card = ({ nameWine, typeWine, priceWine, quantityWine, descriptionWine }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.cardOfWineContainer} onPress={() => navigation.navigate('Visualizar Produto')}>
      <Image
        style={styles.imageWine}
        source={require('../assets/img/vinho.jpg')}
      />
      <View style={styles.infoOfWineContainer}>
          <Text style={styles.nameWine}>{nameWine}</Text>
          <Text style={styles.detailsOfWine}>Valor: R$ {priceWine}</Text>
          <Text style={styles.detailsOfWine}>Quantidade: {quantityWine}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CardList = ({ navigation }) => {
  return (
    <View style={styles.listOfWineContainer}>
      <Card 
        nameWine="Vinho 01" 
        priceWine="200,00" 
        quantityWine="12" 
        navigation={navigation}
      />

      <Card 
        nameWine="Vinho 02" 
        priceWine="300,00" 
        quantityWine="20" 
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default CardList;