import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import Styling from '../assets/css/Styling';
import { useNavigation } from '@react-navigation/native';

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

const CardList = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWine, setSelectedWine] = useState({ name: '', quantity: '' });

  const openModal = (nameWine, quantityWine) => {
    setSelectedWine({ name: nameWine, quantity: quantityWine });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('Home');
  };

  return (
    <View style={Styling.listOfWineContainer}>
      <Card 
        nameWine="Vinho 01" 
        typeWine="Suave"
        priceWine="200,00" 
        quantityWine="12" 
        descriptWine="Um vinho bom para ocasiões especiais"
        navigation={navigation}
        onSelect={openModal} 
      />
      <Card 
        nameWine="Vinho 02" 
        typeWine="Tinto"
        priceWine="300,00" 
        quantityWine="20" 
        descriptWine="Um vinho que serve para frios e derivados"
        navigation={navigation}
        onSelect={openModal} 
      />

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={Styling.modalOverlay}>
          <View style={Styling.modalContent}>
            <Text style={Styling.modalTitle}>{selectedWine.name}</Text>
            <Text style={Styling.modalText}>Quantidade: {selectedWine.quantity}</Text> 
            <View style={Styling.modalButtonContainer}>
              <TouchableOpacity style={Styling.modalButton}>
                <Image style={Styling.plusMinusImage} source={require('../assets/img/minus.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={Styling.modalButton} onPress={closeModal}>
                <Text style={Styling.modalButtonText}>Voltar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styling.modalButton}>
                <Image style={Styling.plusMinusImage} source={require('../assets/img/plus.png')}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CardList;