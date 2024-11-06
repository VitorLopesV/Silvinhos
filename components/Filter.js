import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useWineContext } from '../util/WineContext';
import Styling from '../assets/css/Styling';
import SearchBar from '../components/SearchBar';

// Aba de filtro do sistema 
const Filter = () => {
    const { loadWines } = useWineContext();

    // Busca os produtos pelo tipo 
    const filterByType = (type) => {
        loadWines(null, type);
    }

    return (
        <View style={Styling.drawerContainer}>
            <SearchBar />
            <Text style={Styling.textTitle}>Filtrar pelo tipo:</Text>
            <TouchableOpacity style={Styling.leftBarButton} onPress={() => filterByType('espumante')}>
                <Text style={Styling.leftBarButtonText}>Espumante</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.leftBarButton} onPress={() => filterByType('vinho branco')}>
                <Text style={Styling.leftBarButtonText}>Branco</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.leftBarButton} onPress={() => filterByType('vinho suave')}>
                <Text style={Styling.leftBarButtonText}>Doce</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.leftBarButton} onPress={() => filterByType('vinho rosé')}>
                <Text style={Styling.leftBarButtonText}>Rosé</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.leftBarButton} onPress={() => filterByType('vinho seco')}>
                <Text style={Styling.leftBarButtonText}>Seco</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.leftBarButton} onPress={() => filterByType('vinho tinto')}>
                <Text style={Styling.leftBarButtonText}>Tinto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.leftBarButton} onPress={() => filterByType('vinho verde')}>
                <Text style={Styling.leftBarButtonText}>Verde</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.leftBarButtonClear} onPress={() => filterByType('')}>
                <Text style={Styling.leftBarButtonText}>Limpar Filtro</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Filter;