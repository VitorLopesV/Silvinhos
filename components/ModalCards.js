import React from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import Styling from '../assets/css/Styling';

// Modal que adiciona ou remove a quantidade de produtos do sistema.
const WineModal = ({ modalVisible, closeModal, selectedWine, plusWine, minusWine }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={Styling.modalOverlay}>
        <View style={Styling.modalContent}>
          <Text style={Styling.modalTitle}>{selectedWine.name}</Text>
          <Text style={Styling.modalText}>Quantidade: {selectedWine.quantity}</Text> 
          <View style={Styling.modalButtonContainer}>
            <TouchableOpacity style={Styling.modalButton} onPress={minusWine}>
              <Image style={Styling.plusMinusImage} source={require('../assets/img/minus.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.modalButton} onPress={closeModal}>
              <Text style={Styling.modalButtonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.modalButton} onPress={plusWine}>
              <Image style={Styling.plusMinusImage} source={require('../assets/img/plus.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WineModal;
