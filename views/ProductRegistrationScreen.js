import React, { useState } from 'react';
import { View,Image, TouchableOpacity, Text} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import Styling from '../assets/css/Styling';
import CustomTextInput from "../components/CustomTextInput";
import Formatter from '../util/Formatter';
import db from '../util/db/db';
import { useNavigation } from '@react-navigation/native';

// Tela de cadastro de produto.
const ProductRegistrationScreen = () => {
  const navigation = useNavigation();

// ARMAZENA OS DADOS 
  const [name, setName] = useState('');
  const [tipo, setTipo] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagemProduto, setImagemProduto] = useState(null);

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
    const valorFormatado = Formatter(text);  // Função de formatação
    setPreco(valorFormatado);

  };

  // Não permite quantidades com vírgula
  const handleQuantityChange = (text) => {
    const removeCaracter = text.replace(/,/g, ''); // Remove vírgulas
    setQuantidade(removeCaracter);
  };
  
  const addProduct = () => {
    db.createProduct(name, tipo, preco, quantidade, descricao);
    navigation.navigate('Início');
  }
    
  return (
    <View style={Styling.productContainer}>
      <TouchableOpacity style={Styling.imageUpload} onPress={handleImagePicker}>
        {imagemProduto ? (
          <Image source={{ uri: imagemProduto }} style={Styling.productImage} />
        ) : (
          <Image source={require('../assets/img/imagem padrão produto.png')} style={Styling.productImage} />
        )}
      </TouchableOpacity>

      {imagemProduto && (
        <TouchableOpacity style={Styling.removeButton} onPress={handleRemoverImagem}>
          <Text style={Styling.removeButtonText}>X</Text>
        </TouchableOpacity>
      )}

      <CustomTextInput
        nomeProduto={name} 
        setNomeProduto={setName} 
        tipoProduto={tipo} 
        setTipoProduto={setTipo} 
        valorProduto={preco} 
        handleValorChange={handleValorChange} 
        quantidadeProduto={quantidade} 
        handleQuantityChange={handleQuantityChange}  
        descricaoProduto={descricao} 
        setDescricaoProduto={ setDescricao} 
      />

      <TouchableOpacity style={Styling.button} onPress={addProduct}>
        <Text style={Styling.buttonText}>Cadastrar Produto</Text>
        
      </TouchableOpacity>
    </View>
  );
};

export default ProductRegistrationScreen;
