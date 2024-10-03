// IMPORTAÇÕES
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './router/DrawerNavigator';
import React from 'react';

// Componente principal App
function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;