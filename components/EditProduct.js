import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Styling from '../assets/css/Styling';
import RemoveProductModal from '../components/ModalRemove'; // Importando o Modal

const EditProduct = ({ navigation }) => {
  // Estado para controlar a visibilidade do modal
  const [modalVisible, setModalVisible] = useState(false);

  // Função para abrir o modal
  const openModal = () => {
    setModalVisible(true);
  };

  // Função para fechar o modal sem remover o produto
  const doesNotRemoveProduct = () => {
    setModalVisible(false);
  };

  // Função para remover o produto e fechar o modal
  const removeProduct = () => {
    setModalVisible(false);
    navigation.navigate('Início');
  };

  return (
    <View style={Styling.container}>
      {/* Ícone de remoção do produto (abre o modal) */}
      <TouchableOpacity onPress={openModal}>
        <Image source={require('../assets/img/removeProduct.png')} style={Styling.image} />
      </TouchableOpacity>

      {/* Modal de remoção do produto */}
      <RemoveProductModal 
        visible={modalVisible} 
        doesNotRemove={doesNotRemoveProduct} 
        remove={removeProduct} 
      />
    </View>
  );
};

export default EditProduct;

