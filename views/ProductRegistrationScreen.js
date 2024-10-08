import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

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
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageUpload} onPress={handleImagePicker}>
        {imagemProduto ? (
          <Image source={{ uri: imagemProduto }} style={styles.image} />
        ) : (
          <Image source={{ uri: 'https://via.placeholder.com/180' }} style={styles.image} />
        )}
      </TouchableOpacity>

      {/* Botão de remover a imagem */}
      {imagemProduto && (
        <TouchableOpacity style={styles.removeButton} onPress={handleRemoverImagem}>
          <Text style={styles.removeButtonText}>X</Text>
        </TouchableOpacity>
      )}

      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        placeholderTextColor="#aaa"
        value={nomeProduto}
        onChangeText={setNomeProduto}
        returnKeyType="done"
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo do Produto"
        placeholderTextColor="#aaa"
        value={tipoProduto}
        onChangeText={setTipoProduto}
        returnKeyType="done"
      />
      <TextInput
        style={styles.input}
        placeholder="Valor do Produto"
        placeholderTextColor="#aaa"
        value={valorProduto}
        onChangeText={handleValorChange} //  função de mudança de texto
        keyboardType="numeric"
        returnKeyType="done"
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        placeholderTextColor="#aaa"
        value={quantidadeProduto}
        onChangeText={setQuantidadeProduto}
        keyboardType="numeric"
        returnKeyType="done"
      />
      <TextInput
        style={styles.textArea}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageUpload: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 90,
  },
  removeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#661923',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: '65%',
    maxWidth: 400,
    borderColor: '#661923',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'left',
  },
  textArea: {
    width: '65%',
    maxWidth: 400,
    height: 100,
    borderColor: '#661923',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
});

export default ProductRegistrationScreen;
