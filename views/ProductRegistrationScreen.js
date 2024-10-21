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
    // Remove caracteres que não são números ou vírgulas, utilizando regex
    const valor = text.replace(/[^0-9,]/g, '');
  
    // Se o texto estiver vazio, retorna vazio
    if (valor.length === 0) return '';
  
    // Separa a parte inteira da decimal
    let [inteiro, decimal] = valor.split(',');
  
    // Formata a parte inteira com pontos a cada 3 dígitos, também utilizando regex
    inteiro = inteiro.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    // Limitação de casas decimais
    if (decimal) {
      decimal = decimal.length > 4 ? decimal.slice(0, 4) : decimal; 
    } else {
      decimal = ''; // Não adiciona casas decimais se o usuário não inseriu
    }
  
    // Retorna o valor formatado com "R$"
    return decimal ? `R$ ${inteiro},${decimal}` : `R$ ${inteiro}`;
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
