import { View, Text, TouchableOpacity} from 'react-native';
import Styling from '../assets/css/Styling';
import React from 'react';
import CardList from '../components/Card';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={Styling.MainInterface}>
        <TouchableOpacity style={Styling.productButton} onPress={() => navigation.navigate('Cadastrar Produto')}>
          <Text style={Styling.productButtonText}>+ Cadastrar Produto</Text>
        </TouchableOpacity>
        <CardList/>
      </View>
    );
  };
  
export default HomeScreen;