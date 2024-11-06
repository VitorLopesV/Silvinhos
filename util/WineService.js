import db from "./db/db";

// Array para armazenar a lista de vinhos
let wineList = []; 

// Serviço de carregamento dos vinhos 
const WineService = {

  // Carrega os vinhos do banco de dados com filtros opcionais
  loadWines(name = null, type = null, callback) {
    db.getAllProducts((produtos) => {
      if (!name && !type) {
        wineList = produtos;
      } else {
        wineList = produtos.filter((wine) => {
          const matchesName = name ? wine.name.toLowerCase().includes(name.toLowerCase()) : true;
          const matchesType = type ? wine.type.toLowerCase() === type.toLowerCase() : true;
          return matchesName && matchesType;
        });
      }
      if (callback) callback(wineList); 
    });
  },
};

export default WineService;