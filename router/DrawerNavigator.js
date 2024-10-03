import { View, Text, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import HomeScreen from '../views/home/HomeScreen';
import HeaderLeftMenu from '../components/HeaderLeftMenu';
import Styling from '../assets/css/Styling';

// Criar Drawer
const Drawer = createDrawerNavigator();

// Conteúdo do Drawer
const Filter = ({ navigation }) => {
    return (
      <View style={Styling.drawerContainer}>
        <Text style={Styling.textTitle}>Tipos de vinhos:</Text>
        <TouchableOpacity style={Styling.leftBarButton} onPress={() => navigation.navigate('Vinhos Secos')}>
          <Text style={Styling.leftBarButtonText}>Seco</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styling.leftBarButton} onPress={() => navigation.navigate('Home')}>
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

// Navegação Drawer 
function DrawerNavigator() {
    return (
      <Drawer.Navigator drawerContent={(props) => <Filter {...props} />}>
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={({ navigation }) => ({
            title: 'Início',
            headerStyle: { backgroundColor: '#661923' },
            headerTintColor: '#fff',
            headerLeft: () => <HeaderLeftMenu navigation={navigation} />,
          })}
        />
      </Drawer.Navigator>
    );
  }

  export default DrawerNavigator;