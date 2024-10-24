import { View, Text, TouchableOpacity} from 'react-native';
import Styling from '../assets/css/Styling';
import SearchBar from '../components/SearchBar';
import db from '../util/db/db';


const filterByType = (type) => {
    db.getProductsFromType(type);
}

// Filtros da aba de filtro na tela principal.
const Filter = () => {
    return (
        <View style={Styling.drawerContainer}>
            <SearchBar/>
            <Text style={Styling.textTitle}>Tipos de vinhos:</Text>
            <TouchableOpacity style={Styling.leftBarButton} onPress={() => filterByType('espumante')}>
                <Text style={Styling.leftBarButtonText}>Espumante</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.leftBarButton} onPress={() => filterByType('vinho branco')}>
                <Text style={Styling.leftBarButtonText}>Branco</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.leftBarButton} onPress={() => filterByType('vinho doce')}>
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
        </View>
    );
  };

export default Filter;