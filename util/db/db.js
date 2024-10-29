import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("estoque.db")

// Cria a tabela do  banco de dados.
db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS vinhos (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, tipo TEXT NOT NULL, preço DOUBLE NOT NULL, quantidade INTEGER NOT NULL, descrição TEXT);"
    );
  });
  
  // Retorna todos os produtos do banco de dados.
  const getAllProducts = (callback) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM vinhos;",
        [],
        (_, { rows }) => {
          const produto = rows._array;
          callback(produto); // Chame o callback com a lista de produtos
        },
        (_, error) => {
          console.error("Erro ao buscar produtos:", error); // Imprime o erro no terminal
        }
      );
    });
  };

  // Retorna todos os produtos com o tipo informado do banco de dados.
  const getProductsFromType = (tipo) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM VINHOS WHERE tipo = ?", [tipo],
        (_, { rows }) => {
          const teste = rows._array;
          teste.forEach((produto) => {
            console.log(produto);
          });
        },
        (_, error) => {
          console.error("Erro ao buscar produtos:", error);
        }
      );
    });
  };

  // Retorna todos os produtos com o nome informado do banco de dados.
  const getProductsFromName = (name) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM VINHOS WHERE name = ?", [name],
        (_, { rows }) => {
          const teste = rows._array;
          teste.forEach((produto) => {
            console.log(produto);
          });
        },
        (_, error) => {
          console.error("Erro ao buscar produtos:", error);
        }
      );
    });
  };

// Adiciona um produto no banco de dados.
export const createProduct = (name, tipo, preco, quantidade, descricao) => {

  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO vinhos (name, tipo, preço, quantidade, descrição) VALUES (?, ?, ?, ?, ?);',
      [name, tipo, preco, quantidade, descricao],
      async (_, result) => {
        console.log("\nVinho adicionado com sucesso:", result);
        console.log("Nome do vinho:", name, "Tipo:", tipo, "Valor:", preco, "Quantidade:", quantidade, "Descrição:", descricao)
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

// Atualiza a quantidade de um vinho no banco de dados.
export const updateProductQuantity = (name, newQuantity) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE vinhos SET quantidade = ? WHERE name = ?;',
      [newQuantity, name]
    );
  });
};

  
  export default {
    createProduct,
    getAllProducts,
    removeProduct,
    updateProductQuantity,
    getProductsFromType,
    getProductsFromName,
  };