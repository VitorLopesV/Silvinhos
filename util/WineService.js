import db from "./db/db";

// services/WineService.js
let wineList = []; // Array para armazenar a lista de vinhos

const WineService = {
  // Carrega os vinhos do banco de dados com filtros opcionais
  loadWines(name = null, type = null, callback) {
    db.getAllProducts((produtos) => {
      if (!name && !type) {
        // Se ambos forem nulos, carrega todos os produtos
        wineList = produtos;
      } else {
        // Aplica filtros caso os parâmetros estejam presentes
        wineList = produtos.filter((wine) => {
          const matchesName = name ? wine.name.toLowerCase().includes(name.toLowerCase()) : true;
          const matchesType = type ? wine.type.toLowerCase() === type.toLowerCase() : true;
          return matchesName && matchesType;
        });
      }
      if (callback) callback(wineList); // Executa o callback opcional com os resultados
    });
  },
};

export default WineService;