import { View, Text, TouchableOpacity, Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../views/HomeScreen';
import Styling from '../assets/css/Styling';
import SearchBar from '../components/SearchBar';
import ProductRegistrationScreen from '../views/ProductRegistrationScreen';
import ViewProductScreen from '../views/ViewProductScreen';
import HeaderLeftMenu from '../components/HeaderLeftMenu';

// Criar Drawer
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Conteúdo do Drawer
const Filter = ({ navigation }) => {
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

  function DrawerNavigatorr() {
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
  
  function DrawerNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#661923' }, headerTintColor: '#fff'}}>
        {/* Tela que contém o Drawer */}
        <Stack.Screen 
          name="HomeDrawer" 
          component={DrawerNavigatorr} 
          options={{ headerShown: false }}
        />
        {/* Outras telas usando Stack */}
        <Stack.Screen 
          name="Cadastrar Produto" 
          component={ProductRegistrationScreen} 
          options={{ title: 'Cadastrar Produto' }}
        />
        <Stack.Screen 
          name="Visualizar Produto" 
          component={ViewProductScreen} 
          options={{ title: 'Visualizar Produto' }}
        />
      </Stack.Navigator>
    );
  }

  export default DrawerNavigator;