import db from '../db/mysqlConnection.js';

export default async function mysqlQueryExecution(query) {
  try {
    const [rows] = await db.query(query);
    return rows;
  } catch (error) {
    console.error('Error in mysqlQueryExecution:', error);
  }
}
