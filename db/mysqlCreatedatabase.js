import mysqlQueryExecution from '../util/mysqlQueryExecution';

export async function createDatabase() {
  const query = 'CREATE DATABASE IF NOT EXISTS hyf_users';
  const response = await mysqlQueryExecution(query);
  console.log(response);
}
