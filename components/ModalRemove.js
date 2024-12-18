import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Styling from '../assets/css/Styling';

// Modal da tela de visualizar produto.
const RemoveProductModal = ({ visible, doesNotRemove , remove}) => {
  
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={Styling.modalOverlay}>
        <View style={Styling.modalRemoveContent}>
          <Text style={Styling.modalRemoveTitle}>Deseja mesmo remover o produto?</Text>
          <View style={Styling.modalRemoveButtonContainer}>
            <TouchableOpacity style={Styling.modalRemoveButton} onPress={remove}>
              <Text style={Styling.modalButtonText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.modalRemoveButton} onPress={doesNotRemove}>
              <Text style={Styling.modalButtonText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RemoveProductModal;