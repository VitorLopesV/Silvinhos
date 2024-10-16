import React, { useState } from 'react';
import { View, TextInput, Button,Image, TouchableOpacity, Text, Touchable } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Styling from '../assets/css/Styling';
import CustomTextInput from "../components/CustomTextInput";
import Formatter from '../util/Formatter';

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
    const valorFormatado = <Formatter text={text}/>
    setValorProduto(valorFormatado);
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
        placeholder="Nome do Produto"
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />
      <CustomTextInput
        placeholder="Tipo do produto"
        value={tipoProduto}
        onChangeText={setTipoProduto}
      />
      <CustomTextInput
        placeholder="Valor Produto"
        value={valorProduto}
        onChangeText={handleValorChange}
      />
      <CustomTextInput
        placeholder="Quantidade"
        value={quantidadeProduto}
        onChangeText={setQuantidadeProduto}
      />
      <TextInput
        style={Styling.textDescriptionArea}
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

      <TouchableOpacity style={Styling.button} onPress={handleAdicionarProduto}>
        <Text style={Styling.buttonText}>Cadastrar Produto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductRegistrationScreen;
