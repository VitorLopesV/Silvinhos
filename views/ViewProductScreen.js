import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import Styling from '../assets/css/Styling';
import CustomTextInput from '../components/CustomTextInput';
import Formatter from '../util/Formatter';
import { useNavigation, useRoute } from '@react-navigation/native';

// Tela de visualização, edição e remoção de produto
const ViewProductScreen = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Usado para obter os dados da tela dos cards

  // Pega os dados dos vinhos existentes nos cards
  const { nameWine, typeWine, priceWine, quantityWine, descriptWine } = route.params;

  // ARMAZENA OS DADOS 
  const [nomeProduto, setNomeProduto] = useState('');
  const [tipoProduto, setTipoProduto] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [imagemProduto, setImagemProduto] = useState(null);

  // Preenche os campos de texto assim que a tela é carregada com os dados do vinho
  useEffect(() => {
    setNomeProduto(nameWine);
    setTipoProduto(typeWine);
    setValorProduto(priceWine);
    setQuantidadeProduto(quantityWine ? quantityWine.toString() : ''); // Certifique-se de que é uma string
    setDescricaoProduto(descriptWine);
  }, [nameWine, typeWine, priceWine, quantityWine, descriptWine]);

  
// INSERÇÃO DE DADOS
  // Seleciona a imagem
const handleImagePicker = async () => {
    // Solicita permissão para acessar a galeria
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === true) {
      alert("A permissão para acessar a galeria é necessária!");
      return;
    }

    // Lança a galeria de imagens
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImagemProduto(result.assets[0].uri);
    }
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
    </View>
);
};

export default ViewProductScreen;