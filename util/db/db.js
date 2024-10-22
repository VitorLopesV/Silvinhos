import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("estoque.db")

export default db