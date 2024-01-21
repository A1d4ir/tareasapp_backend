import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Tarea = db.define('tarea', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fechaVencimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
});

export default Tarea