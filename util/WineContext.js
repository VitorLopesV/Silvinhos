import React, { createContext, useContext, useState, useEffect } from 'react';
import WineService from '../util/WineService';

const WineContext = createContext();

export const WineProvider = ({ children }) => {
  const [wineList, setWineList] = useState([]);

  const loadWines = (name = null, type = null) => {
    WineService.loadWines(name, type, setWineList);
  };

  useEffect(() => {
    loadWines(); // Carrega todos os vinhos ao iniciar
  }, []);

  return (
    <WineContext.Provider value={{ wineList, loadWines }}>
      {children}
    </WineContext.Provider>
  );
};

// Hook para usar o contexto
export const useWineContext = () => {
  return useContext(WineContext);
};