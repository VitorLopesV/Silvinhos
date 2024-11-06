import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WineModal from './ModalCards';
import { useWineContext } from '../util/WineContext';
import Styling from '../assets/css/Styling';

// Estrutura dos cards
const Card = ({ imageWine, nameWine, typeWine, priceWine, quantityWine, descriptWine, onSelect }) => {
  const navigation = useNavigation();
 
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

const CardList = ({ testID }) => {
  const navigation = useNavigation();
  const { wineList, loadWines, setWineList } = useWineContext(); 
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWine, setSelectedWine] = useState({ name: '', quantity: 0 });

  useEffect(() => {
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
    <View testID={testID}>
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
        loadWines={loadWines}
      />
    </View>
  );
};

export default CardList;
