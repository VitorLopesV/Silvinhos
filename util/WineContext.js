import React, { createContext, useContext, useState, useEffect } from 'react';
import WineService from '../util/WineService';

const WineContext = createContext();

// Contexto providenciador de vinhos 
export const WineProvider = ({ children }) => {
  const [wineList, setWineList] = useState([]);

  // Carrega os vinhos do banco de dados 
  const loadWines = (name = null, type = null) => {
    WineService.loadWines(name, type, setWineList);
  };

  useEffect(() => {
    loadWines(); 
  }, []);

  return (
    <WineContext.Provider value={{ wineList, loadWines, setWineList }}>
      {children}
    </WineContext.Provider>
  );
};

// Hook para usar o contexto
export const useWineContext = () => {
  return useContext(WineContext);
};