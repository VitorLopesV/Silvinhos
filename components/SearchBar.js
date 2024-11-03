import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text} from 'react-native';
import Styling from '../assets/css/Styling';
import db from '../util/db/db';
import { useWineContext } from '../util/WineContext';


// Barra de pesquisa que fica dentro da aba de filtro da tela príncipal
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { loadWines } = useWineContext();

    const filterByType = (name) => {
        loadWines(name, null);
    }
  return (
    <View style={Styling.container}>
      <TextInput
        style={Styling.searchBar}
        placeholder="Pesquisar..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

    <TouchableOpacity style={Styling.searchButton} onPress={()=> filterByType(searchQuery)}>
      <Text style={Styling.textSeachButton}>Buscar</Text>
    </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
