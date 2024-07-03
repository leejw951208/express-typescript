import { Sequelize } from "sequelize";
import Config from "./config/config";
import { initMember, Member } from "./model/member";
import { initTeam, Team } from "./model/team";

const config = Config["dev"];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

initMember(sequelize);
initTeam(sequelize);

Member.belongsTo(Team, { foreignKey: "team_id" });

export default sequelize;
