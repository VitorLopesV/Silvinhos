import React, { useState } from 'react';
import { View,Image, TouchableOpacity, Text} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Styling from '../assets/css/Styling';
import CustomTextInput from "../components/CustomTextInput";
import Formatter from '../util/Formatter';

// Tela de cadastro de produto.
const ProductRegistrationScreen = ({ navigation }) => {

// ARMAZENA OS DADOS 
  const [nomeProduto, setNomeProduto] = useState('');
  const [tipoProduto, setTipoProduto] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
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
    setValorProduto(valorFormatado);

  };
  const Formatter = (text) => {
    // Remove tudo que não for número, utilizando regex
    let valor = text.replace(/[^0-9]/g, '');
  
    // Se o valor for menor que 3 dígitos, apenas retorna o número como está
    if (valor.length <= 2) {
      return `R$ ${valor}`;
    }
  
    // Separa a parte inteira e as casas decimais
    const inteiro = valor.slice(0, -2); // Tudo menos os dois últimos caracteres
    const decimal = valor.slice(-2);    // Os dois últimos caracteres
  
    // Formata a parte inteira com pontos para separar os milhares
    const inteiroFormatado = inteiro.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    // Retorna o valor formatado com "R$"
    return `R$ ${inteiroFormatado},${decimal}`;
  };
    

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

      <TouchableOpacity style={Styling.button} onPress={() => navigation.navigate('Início')}>
        <Text style={Styling.buttonText}>Cadastrar Produto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductRegistrationScreen;
