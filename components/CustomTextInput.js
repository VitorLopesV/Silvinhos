import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import Styling from '../assets/css/Styling';
import DropDownPicker from 'react-native-dropdown-picker';

// Text input customizado para as telas de cadastro de produto e visualização de produto
const CustomTextInput = (
  { nomeProduto, 
  setNomeProduto, 
  tipoProduto, 
  setTipoProduto, 
  valorProduto, 
  handleValorChange, 
  quantidadeProduto, 
  handleQuantityChange, 
  descricaoProduto, 
  setDescricaoProduto  }) => {

  // Estado local para o DropDownPicker
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Espumante', value: 'espumante' },
    { label: 'Vinho Branco', value: 'vinho branco' },
    { label: 'Vinho Suave', value: 'vinho suave' },
    { label: 'Vinho Rosé', value: 'vinho rosé' },
    { label: 'Vinho Seco', value: 'vinho seco' },
    { label: 'Vinho Tinto', value: 'vinho tinto' },
    { label: 'Vinho Verde', value: 'vinho verde' }
  ]);

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
      
      <DropDownPicker
        style={Styling.dropDownPicker}
        open={open}
        value={tipoProduto}
        items={items}
        setOpen={setOpen}
        setValue={setTipoProduto}
        setItems={setItems}
        placeholder="Selecione o tipo do produto" 
        dropDownContainerStyle={Styling.dropDownContainer} 
      />

      <TextInput
        style={Styling.textArea}
        placeholder="Valor do Produto"
        placeholderTextColor="#aaa"
        value={valorProduto}
        onChangeText={handleValorChange}
        keyboardType="numeric"
        returnKeyType="done"
      />
      <TextInput
        style={Styling.textArea}
        placeholder="Quantidade"
        placeholderTextColor="#aaa"
        value={quantidadeProduto}
        onChangeText={handleQuantityChange}
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
