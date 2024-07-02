import { Sequelize } from "sequelize";
import Config from "./config/config";

const config = Config["dev"];

interface DB {
  [key: string]: any;
  sequlize?: Sequelize;
}

const db: DB = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

db.sequlize = sequelize;

export default sequelize;
