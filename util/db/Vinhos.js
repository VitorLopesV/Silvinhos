import db from "./db";


db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS vinhos (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, tipo TEXT NOT NULL, preço DOUBLE NOT NULL, quantidade INTEGER NOT NULL, descrição TEXT);"
    );
  });
  
  
const getAllProducts = () => {
  return new Promise((resolve, reject) => {

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM vinhos;",
        [],
        (_, { rows }) => {
          resolve(rows._array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const createProduct = (name, tipo, preco, quantidade, descricao) => {

  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO vinhos (name, tipo, preço, quantidade, descrição) VALUES (?, ?, ?, ?, ?);',
      [name, tipo, preco, quantidade, descricao],
      async (_, result) => {
        console.log("Produto adicionado com sucesso:", result);
        
        try {
          const allProducts = await getAllProducts();
          console.log("Produtos no banco de dados:");
          allProducts.forEach((produto) => {
            console.log(produto); 
          });
        } catch (error) {
          console.error("Erro ao buscar produtos:", error);
        }
      },
      (_, error) => {
        console.error("Erro ao adicionar produto:", error);
      }
    );
  });
};

export const removeProduct = (name) => {

  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM vinhos WHERE name = ?;',
      [name],
      (_, result) => {
        console.log("Produto removido com sucesso:", result);
      },
      (_, error) => {
        console.error("Erro ao remover produto:", error);
      }
    );
  });
};
  
  export default {
    createProduct,
    getAllProducts,
    removeProduct,
  };