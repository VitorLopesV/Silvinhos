import React, { useState } from 'react';
import { View, TextInput} from 'react-native';
import Styling from '../assets/css/Styling';
import db from '../util/db/db';

// Barra de pesquisa que fica dentro da aba de filtro da tela príncipal
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  db.getProductsFromName(searchQuery);
  return (
    <View style={Styling.container}>
      <TextInput
        style={Styling.searchBar}
        placeholder="Pesquisar..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

export default SearchBar;
