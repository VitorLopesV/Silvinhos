// IMPORTAÇÕES
import { NavigationContainer } from '@react-navigation/native';
import Router from './router/Router';
import React, { useEffect } from 'react';
import * as SQLite from 'expo-sqlite';

// Componente principal App
function App() {

  useEffect(() => {
    async function setup(){
      const db = await SQLite.openDatabaseAsync('Estoque');

    await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS vinhos (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, tipo TEXT NOT NULL, preço DOUBLE NOT NULL, quantidade INTEGER NOT NULL, descrição TEXT);
    INSERT INTO vinhos (name, tipo, preço, quantidade, descrição) VALUES ('Pérgola', 'Suave', 30.00, 3, 'Bom demais');
    INSERT INTO vinhos (name, tipo, preço, quantidade, descrição) VALUES ('Cabernet', 'Tinto', 300.00, 1, 'Caro demais');
    `);
    const allRows = await db.getAllAsync('SELECT * FROM vinhos');
    for (const row of allRows) {
    console.log(row.id, row.name, row.tipo, row.preço, row.quantidade, row.descrição);
    }}
    setup();
  }, []);
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}

export default App;