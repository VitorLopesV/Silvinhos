import React, { useState } from 'react';
import { View, TextInput} from 'react-native';
import Styling from '../assets/css/Styling';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState(''); // Estado para o texto de pesquisa

  const handleSearch = (text) => {
    setSearchQuery(text);
    console.log('Buscando por:', text); // Aqui você pode adicionar a lógica de busca
  };

  return (
    <View style={Styling.container}>
      <TextInput
        style={Styling.searchBar}
        placeholder="Pesquisar..."
        value={searchQuery}
        onChangeText={handleSearch} // Atualiza o estado com o texto inserido
      />
    </View>
  );
};

export default SearchBar;
