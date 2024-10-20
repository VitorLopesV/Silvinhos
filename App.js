// IMPORTAÇÕES
import { NavigationContainer } from '@react-navigation/native';
import Router from './router/Router';
import React from 'react';

// Componente principal App
function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}

export default App;