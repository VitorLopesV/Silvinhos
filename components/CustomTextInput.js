import React from 'react';
import { TextInput, View } from 'react-native';
import Styling from '../assets/css/Styling';

// Text input constomizado 
const CustomTextInput = (
  { nomeProduto, 
  setNomeProduto, 
  tipoProduto, 
  setTipoProduto, 
  valorProduto, 
  handleValorChange, 
  quantidadeProduto, 
  setQuantidadeProduto, 
  descricaoProduto, 
  setDescricaoProduto  }) => {
  return (
    <View style={Styling.container}>
      <TextInput
        style={Styling.textArea}
        placeholder="Nome do Produto"
        placeholderTextColor="#aaa"
        value={nomeProduto}
        onChangeText={setNomeProduto}
        returnKeyType="done"
      />
      <TextInput
        style={Styling.textArea}
        placeholder="Tipo do Produto"
        placeholderTextColor="#aaa"
        value={tipoProduto}
        onChangeText={setTipoProduto}
        returnKeyType="done"
      />
      <TextInput
        style={Styling.textArea}
        placeholder="Valor do Produto"
        placeholderTextColor="#aaa"
        value={valorProduto}
        onChangeText={handleValorChange} //  função de mudança de texto
        keyboardType="numeric"
        returnKeyType="done"
      />
      <TextInput
        style={Styling.textArea}
        placeholder="Quantidade"
        placeholderTextColor="#aaa"
        value={quantidadeProduto}
        onChangeText={setQuantidadeProduto}
        keyboardType="numeric"
        returnKeyType="done"
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
    </View>
  );
};

export default CustomTextInput;
