import { View, Text, TouchableOpacity} from 'react-native';
import Styling from '../assets/css/Styling';
import SearchBar from '../components/SearchBar';

// Filtros da aba de filtro na tela principal.
const Filter = () => {
    return (
        <View style={Styling.drawerContainer}>
            <SearchBar/>
            <Text style={Styling.textTitle}>Tipos de vinhos:</Text>
            <TouchableOpacity style={Styling.leftBarButton}>
                <Text style={Styling.leftBarButtonText}>Seco</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.leftBarButton}>
                <Text style={Styling.leftBarButtonText}>Suave</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.leftBarButton}>
                <Text style={Styling.leftBarButtonText}>Tinto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styling.leftBarButton}>
                <Text style={Styling.leftBarButtonText}>Espumante</Text>
            </TouchableOpacity>
        </View>
    );
  };

export default Filter;