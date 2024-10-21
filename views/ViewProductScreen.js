import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Styling from '../assets/css/Styling';
import CustomTextInput from '../components/CustomTextInput';
import Formatter from '../util/Formatter';
import { useNavigation } from '@react-navigation/native';
import RemoveProductModal from '../components/ModalRemove';

// Tela de visualização do produto
const ViewProductScreen = () => {
    const navigation = useNavigation();

// ARMAZENA OS DADOS 
const [nomeProduto, setNomeProduto] = useState('');
const [tipoProduto, setTipoProduto] = useState('');
const [valorProduto, setValorProduto] = useState('');
const [quantidadeProduto, setQuantidadeProduto] = useState('');
const [descricaoProduto, setDescricaoProduto] = useState('');
const [imagemProduto, setImagemProduto] = useState(null);
const [modalVisible, setModalVisible] = useState(false);

//MODAL
  // Abre o modal
const openModal = () => {
    setModalVisible(true);
};

  // Fecha o modal e mantém na tela de visualização de produto
const doesNotRemoveProduct = () => {
    setModalVisible(false);
};

  // Fecha o modal, remove o produto e direciona o usuário a tela inicial.
const removeProduct = () => {
    setModalVisible(false);
    navigation.navigate('Início');
};

// INSERÇÃO DE DADOS
  // Seleciona a imagem
const handleImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
    if (response.assets && response.assets.length > 0) {
        setImagemProduto(response.assets[0].uri);
    }
    });
};

  // Remove a imagem inserida
const handleRemoverImagem = () => {
    setImagemProduto(null);
};

  // Manipula o valores de texto inserido
const handleValorChange = (text) => {
    const valorFormatado = Formatter(text);
    setValorProduto(valorFormatado);
  };

    //Navegando Modal como prop
    const navigateToEditProduct = () => {
        navigation.navigate('EditProduct', {
        openModal, 
        doesNotRemoveProduct,
        removeProduct,
        modalVisible
    });
}

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

    <TouchableOpacity style={Styling.trashButton} onPress={() => navigation.navigate('Início')}>
        <Text style={Styling.buttonText}>Salvar</Text>
    </TouchableOpacity>

    <RemoveProductModal visible={modalVisible} doesNotRemove={doesNotRemoveProduct} remove={removeProduct} />
    </View>
);
};

export default ViewProductScreen;