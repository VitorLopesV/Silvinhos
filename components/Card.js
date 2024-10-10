import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import Styling from '../assets/css/Styling';

const Card = ({ nameWine, typeWine, priceWine, quantityWine, descriptionWine, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const backToHome = () => {
    setModalVisible(false);
    navigation.navigate('Home');
  };
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

      <TouchableOpacity 
        style={Styling.roundButton} 
        onPress={() => setModalVisible(true)}
      >
        <Text style={Styling.buttonText}>+</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={Styling.modalOverlay}>
          <View style={Styling.modalContent}>
            <Text style={Styling.modalText}>Nome do vinho</Text>
            <View style={Styling.buttonContainer}>
              <TouchableOpacity style={Styling.modalButton}>
                <Text style={Styling.buttonText}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styling.modalButton} onPress={backToHome}>
                <Text style={Styling.buttonText}>Voltar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styling.modalButton}>
                <Text style={Styling.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
