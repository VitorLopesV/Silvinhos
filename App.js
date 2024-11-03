// IMPORTAÇÕES
import { NavigationContainer } from '@react-navigation/native';
import Router from './router/Router';
import React from 'react';
import { WineProvider } from './util/WineContext';

// Componente principal App
function App() {
  return (
    <WineProvider>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </WineProvider>
  
  );
}

export default App;