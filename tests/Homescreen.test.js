// HomeScreen.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../views/HomeScreen'; 
import { NavigationContainer } from '@react-navigation/native';
import { WineProvider } from '../util/WineContext';

const navigationMock = {
  navigate: jest.fn(),
};

describe('HomeScreen', () => {
  it('HomeScreen renderizando corretamente junto com botão de cadastrar produto e os cards dos vinhos.', () => {
    const { getByText, getByTestId } = render(
      <WineProvider>
        <NavigationContainer>
          <HomeScreen navigation={navigationMock} />
        </NavigationContainer>
      </WineProvider>
    );

    // Verifica se o texto do botão cadastrar produto está renderizando corretamente
    expect(getByText('+ Cadastrar Produto')).toBeTruthy();

    // Verifique se os cards estão renderizando corretamente
    expect(getByTestId('card-list')).toBeTruthy();
  });
});
