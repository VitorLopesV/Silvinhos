import React, { useState } from 'react';
import { View,Image, TouchableOpacity, Text} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
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
    const valorFormatado = Formatter(text);  // Função de formatação
    setPreco(valorFormatado);

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
        setQuantidadeProduto={setQuantidade}  
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
