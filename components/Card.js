import React from 'react';
<<<<<<< Updated upstream
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
=======
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styling from '../assets/css/Styling';
>>>>>>> Stashed changes

const Card = ({ nameWine, typeWine, priceWine, quantityWine, descriptionWine }) => {
  return (
<<<<<<< Updated upstream
    <TouchableOpacity style={styles.cardOfWineContainer} onPress={() => navigation.navigate('Home')}>
=======
    <TouchableOpacity style={Styling.cardOfWineContainer} onPress={() => navigation.navigate('Visualizar Produto')}>
>>>>>>> Stashed changes
      <Image
        style={Styling.imageWine}
        source={require('../assets/img/vinho.jpg')}
      />
      <View style={Styling.infoOfWineContainer}>
          <Text style={Styling.nameWine}>{nameWine}</Text>
          <Text style={Styling.detailsOfWine}>Valor: R$ {priceWine}</Text>
          <Text style={Styling.detailsOfWine}>Quantidade: {quantityWine}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CardList = ({ navigation }) => {
  return (
    <View style={Styling.listOfWineContainer}>
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

export default CardList;