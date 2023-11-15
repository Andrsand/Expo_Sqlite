import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Configuration } from '../values/configuration';

export const checkExistenceDB = async dbName => {
    const dbDir = FileSystem.documentDirectory + 'SQLite/';
    const dirInfo = await FileSystem.getInfoAsync(dbDir + dbName);
    if (dirInfo.exists) return false;
    else return true;
};

export async function createDatabase(dbName) {
    const db = await SQLite.openDatabase(dbName);
    db.transaction(tx => {
        tx.executeSql(`
            CREATE TABLE 'mytest' 
            (
                "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                "question" TEXT,
                "answer" TEXT,
            )
        `);
    }), error => console.log(`create error: ${error}`);
}

export async function select(dbName) {
    const db = SQLite.openDatabase(dbName);
    db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM mytest',
            [],
            (_, { rows }) => {
                console.log(JSON.stringify(rows));
            });
    }), error => console.log(`create select: ${error}`);
}

export async function insertInto(dbName, question = "", answer = "") {
    const dirInfo = await checkExistenceDB(dbName);
    if (!dirInfo) await createDatabase(dbName);

    const db = SQLite.openDatabase(dbName);
    db.transaction(tx => {
        tx.executeSql(`
        INSERT INTO mytest (question, answer)
        values ('${question}', '${answer}')
        `);
    }), error => console.log(`create error: ${error}`);
}
