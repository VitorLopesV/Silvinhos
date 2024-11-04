import { View, Text, TouchableOpacity} from 'react-native';
import Styling from '../assets/css/Styling';
import React from 'react';
import CardList from '../components/Card';

// Tela principal
const HomeScreen = ({ navigation }) => {
    return (
      <View style={Styling.MainInterface}>
        <TouchableOpacity style={Styling.productButton} onPress={() => navigation.navigate('Cadastrar Produto')}>
          <Text style={Styling.productButtonText}>+ Cadastrar Produto</Text>
        </TouchableOpacity>
        <CardList testID="card-list"/>
      </View>
    );
  };
  
export default HomeScreen;