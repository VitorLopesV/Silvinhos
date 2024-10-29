import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../views/HomeScreen';
import ProductRegistrationScreen from '../views/ProductRegistrationScreen';
import ViewProductScreen from '../views/ViewProductScreen';
import HeaderLeftMenu from '../components/HeaderLeftMenu';
import Filter from '../components/Filter';
import RemoveProduct from '../components/RemoveProduct';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

  // Cria a tela principal com Drawer
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
  
  // Cria as telas com Stack
  function Router() {
    return (
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#661923' }, headerTintColor: '#fff'}}>
        {/* Tela que contém o Drawer */}
        <Stack.Screen 
          name="Início" 
          component={DrawerNavigator} 
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
          options={({ navigation }) => ({
            title: 'Visualizar Produto',
            headerRight: () => <RemoveProduct navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    );
  }

  export default Router;