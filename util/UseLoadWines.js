import { useState, useEffect } from 'react';
import db from '../util/db/db'; // Ajuste o caminho para o arquivo do banco de dados

const useLoadWines = (name = null, type = null) => {
  const [wineList, setWineList] = useState([]);

  // Função para carregar os vinhos do banco de dados
  const loadWines = (name = null, type = null) => {
    console.log("Carregando vinhos com os filtros:", { name, type });
    db.getAllProducts(name, type, (produtos) => {
      setWineList(produtos);
    });
  };

  useEffect(() => {
    loadWines(name, type); 
  }, [name, type]); 
  return { wineList, loadWines };
};

export default useLoadWines;
