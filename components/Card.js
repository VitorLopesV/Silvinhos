import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styling from '../assets/css/Styling';

const Card = ({ nameWine, typeWine, priceWine, quantityWine, descriptionWine }) => {
  return (
    <TouchableOpacity style={Styling.cardOfWineContainer} onPress={() => navigation.navigate('Home')}>
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