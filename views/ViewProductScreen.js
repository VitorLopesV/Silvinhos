import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Styling from '../assets/css/Styling';
import CustomTextInput from '../components/CustomTextInput';
import Formatter from '../util/Formatter';
import { useNavigation } from '@react-navigation/native';
import RemoveProductModal from '../components/ModalRemove';

const ViewProductScreen = () => {
  const navigation = useNavigation();

  const [nomeProduto, setNomeProduto] = useState('');
  const [tipoProduto, setTipoProduto] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [imagemProduto, setImagemProduto] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('Visualizar Produto');
  };

  const teste = () => {
    setModalVisible(false);
    navigation.navigate('Início');
  };
  

  const handleImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImagemProduto(response.assets[0].uri);
      }
    });
  };

  const handleRemoverImagem = () => {
    setImagemProduto(null);
  };

  const handleValorChange = (text) => {
    const valorFormatado = <Formatter text={text} />;
    setValorProduto(valorFormatado);
  };

  return (
    <View style={Styling.productContainer}>
      <TouchableOpacity style={Styling.imageUpload} onPress={handleImagePicker}>
        {imagemProduto ? (
          <Image source={{ uri: imagemProduto }} style={Styling.productImage} />
        ) : (
          <Image source={require('../assets/img/vinho.jpg')} style={Styling.productImage} />
        )}
      </TouchableOpacity>

      {imagemProduto && (
        <TouchableOpacity style={Styling.removeButton} onPress={handleRemoverImagem}>
          <Text style={Styling.removeButtonText}>X</Text>
        </TouchableOpacity>
      )}

      <CustomTextInput
        nomeProduto={nomeProduto} 
        setNomeProduto={setNomeProduto} 
        tipoProduto={tipoProduto} 
        setTipoProduto={setTipoProduto} 
        valorProduto={valorProduto} 
        handleValorChange={handleValorChange} 
        quantidadeProduto={quantidadeProduto} 
        setQuantidadeProduto={setQuantidadeProduto}  
        descricaoProduto={descricaoProduto} 
        setDescricaoProduto={setDescricaoProduto} 
      />

      <TouchableOpacity style={Styling.button} onPress={openModal}>
        <Text style={Styling.buttonText}>Remover Produto</Text>
      </TouchableOpacity>

      <RemoveProductModal visible={modalVisible} onClose={closeModal} teste={teste} />
    </View>
  );
};

export default ViewProductScreen;