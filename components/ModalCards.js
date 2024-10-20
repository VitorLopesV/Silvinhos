import React from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import Styling from '../assets/css/Styling';

const WineModal = ({ modalVisible, closeModal, selectedWine }) => {
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
  );
};

export default WineModal;