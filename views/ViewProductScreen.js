import { View, Text, TextInput, Button,Image, TouchableOpacity} from "react-native";
import { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import Styling from "../assets/css/Styling";
import CustomTextInput from "../components/CustomTextInput";
import Formatter from "../util/Formatter";
import { useNavigation } from '@react-navigation/native';

const ViewProductScreen = () =>{
  const navigation = useNavigation();

    const [nomeProduto, setNomeProduto] = useState('');
    const [tipoProduto, setTipoProduto] = useState('');
    const [valorProduto, setValorProduto] = useState('');
    const [quantidadeProduto, setQuantidadeProduto] = useState('');
    const [descricaoProduto, setDescricaoProduto] = useState('');
    const [imagemProduto, setImagemProduto] = useState(null);

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
    const valorFormatado = <Formatter text ={text}/>
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
      
      <TouchableOpacity style={Styling.button} onPress={() => navigation.navigate('Início')}>
        <Text style={Styling.buttonText}>Cadastrar Produto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewProductScreen;