import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WineModal from './ModalCards';
import Styling from '../assets/css/Styling';
import db from '../util/db/db';

// Estrutura dos cards
const Card = ({ nameWine, typeWine, priceWine, quantityWine, descriptWine, onSelect }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={Styling.cardOfWineContainer} onPress={() => navigation.navigate('Visualizar Produto', {
      nameWine, typeWine, priceWine, quantityWine, descriptWine })}>
      <Image style={Styling.imageWine} source={require('../assets/img/vinho.jpg')} />
      <View style={Styling.infoOfWineContainer}>
        <Text style={Styling.nameWine}>{nameWine}</Text>
        <Text style={Styling.detailsOfWine}>Valor: {priceWine}</Text>
        <Text style={Styling.detailsOfWine}>Quantidade: {quantityWine}</Text>
      </View>
      <TouchableOpacity style={Styling.editButton} onPress={() => onSelect(nameWine, quantityWine)}>
        <Image style={Styling.adcImage} source={require('../assets/img/adc.png')} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const CardList = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWine, setSelectedWine] = useState({ name: '', quantity: 0 });
  const [wineList, setWineList] = useState([]); // Lista dos vinhos

  // Função para carregar vinhos do banco de dados
  const loadWines = () => {
    db.getAllProducts((produtos) => {
      setWineList(produtos); 
    });
  };

  // Chame loadWines no useEffect para carregar os vinhos ao montar o componente
  useEffect(() => {
    loadWines();
    // Carrega os vinhos sempre que a tela estiver sendo visualizada
    const unsubscribe = navigation.addListener('focus', () => {
      loadWines();
    });
    return unsubscribe;
  }, [navigation]);

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

  // Função para atualizar a quantidade de um vinho na lista 
  const updateQuantity = (name, newQuantity) => {
    db.updateProductQuantity(name, newQuantity);
    setWineList(prevWineList => {
      return prevWineList.map(wine => 
        wine.name === name ? { ...wine, quantidade: newQuantity } : wine
      );
    });
  };

  // Função para aumentar quantidade de um vinho pelo pop-up
  const plusQuantity = () => {
    setSelectedWine(prev => {
      const newQuantity = prev.quantity + 1;
      updateQuantity(prev.name, newQuantity);
      return { ...prev, quantity: newQuantity };
    });
  };

  // Função para diminuir quantidade de um vinho pelo pop-up
  const minusQuantity = () => {
    setSelectedWine(prev => {
      if (prev.quantity > 0) {
        const newQuantity = prev.quantity - 1;
        updateQuantity(prev.name, newQuantity);
        return { ...prev, quantity: newQuantity };
      }
      return prev;
    });
  };

  // Função para renderizar o card e cada informação sobre o vinho
  const renderCards = ({ item }) => (
    <Card 
      nameWine={item.name} 
      typeWine={item.tipo}
      priceWine={item.preço} 
      quantityWine={item.quantidade} 
      descriptWine={item.descrição}
      onSelect={openModal} 
    />
  );

  return (
    <View>
      <FlatList
        data={wineList}
        renderItem={renderCards}
        keyExtractor={item => item.id.toString()}
      />
      <WineModal  
        modalVisible={modalVisible}
        closeModal={closeModal}
        selectedWine={selectedWine}
        plusWine={plusQuantity}
        minusWine={minusQuantity}
      />
    </View>
  );
};

export default CardList;
