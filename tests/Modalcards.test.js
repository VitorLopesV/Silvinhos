// modalcards.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import WineModal from '../components/ModalCards'; 

describe('WineModal', () => {
  it('não permite que a quantidade do vinho fique abaixo de 0', () => {
    const closeModal = jest.fn();
    const setWineList = jest.fn();
    const testWine = { name: 'Vinho Teste', quantity: 0 };

    const { getByTestId } = render(
      <WineModal 
        modalVisible={true}
        closeModal={closeModal}
        selectedWine={testWine}
        setWineList={setWineList}
        setSelectedWine={() => {}}
      />
    );

    // Verifica se o botão de diminuir quantidade está renderizado
    const minusButton = getByTestId('minus-button');
    expect(minusButton).toBeTruthy();

    // Pressiona o botão de diminuir quantidade
    fireEvent.press(minusButton);

    // Verifica se a quantidade não baixou de 0
    expect(setWineList).not.toHaveBeenCalledWith(expect.objectContaining({ quantity: -1 }));
  });
});
