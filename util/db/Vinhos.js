import db from "./db";

// Cria a tabela do  banco de dados.
db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS vinhos (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, tipo TEXT NOT NULL, preço DOUBLE NOT NULL, quantidade INTEGER NOT NULL, descrição TEXT);"
    );
  });
  
  // Retorna todos os produtos do banco de dados.
  const getAllProducts = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM vinhos;",
        [],
        (_, { rows }) => {
          const teste = rows._array
          teste.forEach((produto) => {
          console.log(produto); // Imprime os resultados no terminal
        })},
        (_, error) => {
          console.error("Erro ao buscar produtos:", error); // Imprime o erro no terminal
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
        console.log("Produto adicionado com sucesso:", result);

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
  
  export default {
    createProduct,
    getAllProducts,
    removeProduct,
  };