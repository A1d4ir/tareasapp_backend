import { Sequelize } from "sequelize";

const db = new Sequelize('tareas_app', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;