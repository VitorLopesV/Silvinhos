import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WineModal from './ModalCards';
import Styling from '../assets/css/Styling';
import db from '../util/db/db';

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

  // Abre o modal (pop-up) dos cards
  const openModal = (nameWine, quantityWine) => {
    setSelectedWine({ name: nameWine, quantity: quantityWine });
    setModalVisible(true);
  };

  // Fecha o modal (pop-up) dos cards
  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('Início');
  };

  // Função para renderizar o card e cada informação sobre o vinho
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
        data={wineList}
        renderItem={renderCards}
        keyExtractor={item => item.id.toString()}
      />
      <WineModal  
        modalVisible={modalVisible}
        closeModal={closeModal}
        selectedWine={selectedWine}
        setSelectedWine={setSelectedWine}
        setWineList={setWineList}
      />
    </View>
  );
};

export default CardList;
