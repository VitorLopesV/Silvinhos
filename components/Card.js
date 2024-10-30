import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WineModal from './ModalCards';
import Styling from '../assets/css/Styling';
import useLoadWines from '../util/UseLoadWines';

const Card = ({ imageWine, nameWine, typeWine, priceWine, quantityWine, descriptWine, onSelect }) => {
  const navigation = useNavigation();
// Estrutura dos cards
  return (
    <TouchableOpacity style={Styling.cardOfWineContainer} onPress={() => navigation.navigate('Visualizar Produto', {
      imageWine, nameWine, typeWine, priceWine, quantityWine, descriptWine })}>
      <Image style={Styling.imageWine} source={imageWine ? { uri: imageWine } : require('../assets/img/imagem padrão produto.png')}/>
      <View style={Styling.infoOfWineContainer}>
        <Text style={Styling.nameWine}>{nameWine}</Text>
        <Text style={Styling.detailsOfWine}>Valor: {priceWine}</Text>
        <Text style={Styling.detailsOfWine}>Quantidade: {quantityWine}</Text>
      </View>
      <TouchableOpacity style={Styling.editQuantityButton} onPress={() => onSelect(nameWine, quantityWine)}>
        <Image style={Styling.adcImage} source={require('../assets/img/adc.png')} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const CardList = () => {
  const navigation = useNavigation();
  const { wineList, loadWines } = useLoadWines(); // Usa o hook para carregar os vinhos
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWine, setSelectedWine] = useState({ name: '', quantity: 0 });

  // Chama a função de carregar os vinhos quando a tela ganha foco
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadWines(); // Recarrega os vinhos ao focar na tela
    });
    return unsubscribe;
  }, [navigation]);

  const openModal = (nameWine, quantityWine) => {
    setSelectedWine({ name: nameWine, quantity: quantityWine });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('Início');
  };

  const renderCards = ({ item }) => (
    <Card 
      imageWine={item.image}
      nameWine={item.name} 
      typeWine={item.type}
      priceWine={item.price} 
      quantityWine={item.quantity} 
      descriptWine={item.description}
      onSelect={openModal} 
    />
  );

  return (
    <View>
      <FlatList
        data={wineList} // Lista de vinhos carregada
        renderItem={renderCards}
        keyExtractor={item => item.id.toString()}
      />
      <WineModal  
        modalVisible={modalVisible}
        closeModal={closeModal}
        selectedWine={selectedWine}
        setSelectedWine={setSelectedWine}
      />
    </View>
  );
};

export default CardList;
