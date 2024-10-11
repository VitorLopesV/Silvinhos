import React, { useState } from 'react';
import { View, TextInput, Button,Image, TouchableOpacity, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Styling from '../assets/css/Styling';

const ProductRegistrationScreen = ({ navigation }) => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [tipoProduto, setTipoProduto] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [imagemProduto, setImagemProduto] = useState(null);

  const handleAdicionarProduto = () => {
    console.log({
      nomeProduto,
      tipoProduto,
      valorProduto,
      quantidadeProduto,
      descricaoProduto,
      imagemProduto,
    });

    // Navega de volta para a tela inicial após adicionar o produto
    navigation.navigate('Home');
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

  const formatarValor = (text) => {
    // Remove caracteres que não são números ou vírgulas
    const valor = text.replace(/[^0-9,]/g, '');

    // Se o texto estiver vazio, retorna vazio
    if (valor.length === 0) return '';

    // Separa a parte inteira da decimal
    let [inteiro, decimal] = valor.split(',');

    // Adiciona formatação com R$ e casas decimais
    inteiro = parseInt(inteiro, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Formata a parte inteira
    if (decimal) {
      decimal = decimal.length > 2 ? decimal.slice(0, 2) : decimal; // Limita a duas casas decimais
    } else {
      decimal = '';
    }

    return `R$ ${inteiro}${decimal ? ',' + decimal : ''}`;
  };

  const handleValorChange = (text) => {
    const valorFormatado = formatarValor(text);
    setValorProduto(valorFormatado);
  };

  return (
    <View style={Styling.productContainer}>
      <TouchableOpacity style={Styling.imageUpload} onPress={handleImagePicker}>
        {imagemProduto ? (
          <Image source={{ uri: imagemProduto }} style={Styling.image} />
        ) : (
          <Image source={{ uri: 'https://via.placeholder.com/180' }} style={Styling.image} />
        )}
      </TouchableOpacity>

      {/* Botão de remover a imagem */}
      {imagemProduto && (
        <TouchableOpacity style={Styling.removeButton} onPress={handleRemoverImagem}>
          <Text style={Styling.removeButtonText}>X</Text>
        </TouchableOpacity>
      )}

      <TextInput
        style={Styling.input}
        placeholder="Nome do Produto"
        placeholderTextColor="#aaa"
        value={nomeProduto}
        onChangeText={setNomeProduto}
        returnKeyType="done"
      />
      <TextInput
        style={Styling.input}
        placeholder="Tipo do Produto"
        placeholderTextColor="#aaa"
        value={tipoProduto}
        onChangeText={setTipoProduto}
        returnKeyType="done"
      />
      <TextInput
        style={Styling.input}
        placeholder="Valor do Produto"
        placeholderTextColor="#aaa"
        value={valorProduto}
        onChangeText={handleValorChange} //  função de mudança de texto
        keyboardType="numeric"
        returnKeyType="done"
      />
      <TextInput
        style={Styling.input}
        placeholder="Quantidade"
        placeholderTextColor="#aaa"
        value={quantidadeProduto}
        onChangeText={setQuantidadeProduto}
        keyboardType="numeric"
        returnKeyType="done"
      />
      <TextInput
        style={Styling.textArea}
        placeholder="Descrição"
        placeholderTextColor="#aaa"
        value={descricaoProduto}
        onChangeText={setDescricaoProduto}
        multiline={true}
        numberOfLines={4}
        maxLength={200}
        textAlignVertical="top"
        returnKeyType="done"
      />
      <Button title="Adicionar Produto" onPress={handleAdicionarProduto} color="#661923" />
    </View>
  );
};

export default ProductRegistrationScreen;
