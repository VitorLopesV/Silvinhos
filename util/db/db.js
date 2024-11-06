import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("silvinhos.db")

// Cria a tabela do  banco de dados.
db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY NOT NULL, image TEXT, name TEXT NOT NULL, type TEXT NOT NULL, price DOUBLE NOT NULL, quantity INTEGER NOT NULL, description TEXT);"
    );
  });
  
  // Retorna todos os produtos do banco de dados.
  const getAllProducts = (callback) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM produtos;",
        [],
        (_, { rows }) => {
          const produto = rows._array;
          callback(produto); 
        },
        (_, error) => {
          console.error("Erro ao buscar produtos:", error); 
        }
      );
    });
  };

// Adiciona um produto no banco de dados.
export const createProduct = (image, name, type, price, quantity, description) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO produtos (image, name, type, price, quantity, description) VALUES (?, ?, ?, ?, ?, ?);',
      [image, name, type, price, quantity, description],
      async (_, result) => {
        console.log("\nVinho adicionado com sucesso:", result);
        console.log("Nome do vinho:", name, "Tipo:", type, "Valor:", price, "Quantidade:", quantity, "Descrição:", description)
      },
      (_, error) => {
        console.error("Erro ao adicionar produto:", error);
      }
    );
  });
};

// Remove um produto do banco de dados.
export const removeProduct = (name) => {

  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM produtos WHERE name = ?;',
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

// Atualiza a quantity de um vinho no banco de dados.
export const updateProductQuantity = (name, newQuantity) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE produtos SET quantity = ? WHERE name = ?;',
      [newQuantity, name]
    );
  });
};

  export default {
    createProduct,
    getAllProducts,
    removeProduct,
    updateProductQuantity,
  };