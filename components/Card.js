import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styling from '../assets/css/Styling';
import { useNavigation } from '@react-navigation/native';
import WineModal from './ModalCards'

// Card de produto.
const Card = ({ nameWine, typeWine, priceWine, quantityWine, descriptWine, onSelect }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={Styling.cardOfWineContainer} onPress={() => navigation.navigate('Visualizar Produto')}>
      <Image style={Styling.imageWine} source={require('../assets/img/vinho.jpg')}/>
      <View style={Styling.infoOfWineContainer}>
        <Text style={Styling.nameWine}>{nameWine}</Text>
        <Text style={Styling.detailsOfWine}>Valor: R$ {priceWine}</Text>
        <Text style={Styling.detailsOfWine}>Quantidade: {quantityWine}</Text>
      </View>

      <TouchableOpacity style={Styling.editButton} onPress={() => onSelect(nameWine, quantityWine)}>
        <Image style={Styling.adcImage} source={require('../assets/img/adc.png')}/>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

// Lista de cards de produto.
const CardList = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWine, setSelectedWine] = useState({ name: '', quantity: '' });

//MODAL
  // Abre o modal.
  const openModal = (nameWine, quantityWine) => {
    setSelectedWine({ name: nameWine, quantity: quantityWine });
    setModalVisible(true);
  };

  // Fecha o modal.
  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('Início');
  };

  return (
    <View style={Styling.listOfWineContainer}>
      <Card 
        nameWine="Vinho 01" 
        typeWine="Suave"
        priceWine="200,00" 
        quantityWine="12" 
        descriptWine="Um vinho bom para ocasiões especiais"
        onSelect={openModal} 
      />
      <Card 
        nameWine="Vinho 02" 
        typeWine="Tinto"
        priceWine="300,00" 
        quantityWine="20" 
        descriptWine="Um vinho que serve para frios e derivados"
        onSelect={openModal} 
      />

      <WineModal 
        modalVisible={modalVisible}
        closeModal={closeModal}
        selectedWine={selectedWine}
      />
    </View>
  );
};

export default CardList;