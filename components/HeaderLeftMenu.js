import {TouchableOpacity, Image} from 'react-native';
import Styling from '../assets/css/Styling';
  
  // Menu para o Header
  const HeaderLeftMenu = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Image source={require('../assets/img/filtro.png')} style={Styling.image}/>
    </TouchableOpacity>
  );

  export default HeaderLeftMenu;