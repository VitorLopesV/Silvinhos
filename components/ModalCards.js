import React from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import Styling from '../assets/css/Styling';
import db from '../util/db/db';

// Modal que adiciona ou remove a quantidade de produtos do sistema.
const WineModal = ({ modalVisible, closeModal, selectedWine, setWineList, setSelectedWine }) => {
  // Função para atualizar a quantidade de um vinho na lista e no BD 
  const updateQuantity = (name, newQuantity) => {
    db.updateProductQuantity(name, newQuantity);
    setWineList(prevWineList => {
      return prevWineList.map(wine => 
        wine.name === name ? { ...wine, quantity: newQuantity } : wine
      );
    });
  };

  // Função para aumentar quantidade de um vinho pelo modal (pop-up)
  const plusQuantity = () => {
    setSelectedWine(prev => {
      const newQuantity = prev.quantity + 1;
      updateQuantity(prev.name, newQuantity);
      return { ...prev, quantity: newQuantity };
    });
  };

  // Função para diminuir quantidade de um vinho pelo modal (pop-up)
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
            <TouchableOpacity style={Styling.modalButton} onPress={minusQuantity} testID="minus-button">
              <Image style={Styling.plusMinusImage} source={require('../assets/img/minus.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.modalButton} onPress={closeModal}>
              <Text style={Styling.modalButtonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.modalButton} onPress={plusQuantity}>
              <Image style={Styling.plusMinusImage} source={require('../assets/img/plus.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WineModal;
