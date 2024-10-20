import {TouchableOpacity, Image} from 'react-native';
import Styling from '../assets/css/Styling';
  
  // Menu para o Header
  const EditProduct = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Image source={require('../assets/img/editButton.png')} style={Styling.image}/>
    </TouchableOpacity>
  );

  export default EditProduct;