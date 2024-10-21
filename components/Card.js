import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WineModal from './ModalCards';
import Styling from '../assets/css/Styling';

// Estrutura dos cards
const Card = ({ nameWine, typeWine, priceWine, quantityWine, descriptWine, onSelect }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={Styling.cardOfWineContainer} onPress={() => navigation.navigate('Visualizar Produto', {
      nameWine, typeWine, priceWine, quantityWine, descriptWine})}>
      <Image style={Styling.imageWine} source={require('../assets/img/vinho.jpg')} />
      <View style={Styling.infoOfWineContainer}>
        <Text style={Styling.nameWine}>{nameWine}</Text>
        <Text style={Styling.detailsOfWine}>Valor: R$ {priceWine}</Text>
        <Text style={Styling.detailsOfWine}>Quantidade: {quantityWine}</Text>
      </View>
      <TouchableOpacity style={Styling.editButton} onPress={() => onSelect(nameWine, quantityWine)}>
        <Image style={Styling.adcImage} source={require('../assets/img/adc.png')} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

// Lista dos vinhos
const wineList = [
  { id: '1', nameWine: 'Vinho 01', typeWine: 'Suave', priceWine: '200,00', quantityWine: '12', descriptWine: 'Um vinho bom para ocasiões especiais.' },
  { id: '2', nameWine: 'Vinho 02', typeWine: 'Tinto', priceWine: '300,00', quantityWine: '20', descriptWine: 'Um vinho que serve para frios e derivados.' },
];

const CardList = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWine, setSelectedWine] = useState({ name: '', quantity: '' });

  // Abre o modal
  const openModal = (nameWine, quantityWine) => {
    setSelectedWine({ name: nameWine, quantity: quantityWine });
    setModalVisible(true);
  };

  // Fecha o modal
  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('Início');
  };

  // Função para renderizar o card e cada informação sobre o vinho
  const renderCards = ({ item }) => (
    <Card 
      nameWine={item.nameWine} 
      typeWine={item.typeWine}
      priceWine={item.priceWine} 
      quantityWine={item.quantityWine} 
      descriptWine={item.descriptWine}
      onSelect={openModal} 
    />
  );

  return (
    <View style={Styling.listOfWineContainer}>
      <FlatList
        data={wineList}
        renderItem={renderCards}
        keyExtractor={item => item.id}
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
