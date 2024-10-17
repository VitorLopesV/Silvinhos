import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Styling from '../assets/css/Styling';

const RemoveProductModal = ({ visible, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={Styling.modalOverlay}>
        <View style={Styling.modalRemoveContent}>
          <Text style={Styling.modalRemoveTitle}>Deseja mesmo remover o produto?</Text>
          <View style={Styling.modalRemoveButtonContainer}>
            <TouchableOpacity style={Styling.modalRemoveButton}>
              <Text style={Styling.modalButtonText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.modalRemoveButton} onPress={onClose}>
              <Text style={Styling.modalButtonText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RemoveProductModal;