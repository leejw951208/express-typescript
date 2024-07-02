interface ENV {
  [key: string]: any;
}

const dev: ENV = {
  username: "root",
  password: "1234",
  database: "sequelize",
  host: "localhost",
  dialect: "mysql",
};

const prod: ENV = {
  username: "root",
  password: "1234",
  database: "sequelize",
  host: "localhost",
  dialect: "mysql",
};

const Config = { dev, prod };

export default Config;
