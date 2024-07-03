import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  ForeignKey,
  CreationOptional,
  Sequelize,
} from "sequelize";
import { Team } from "./team";

export class Member extends Model<
  InferAttributes<Member>,
  InferCreationAttributes<Member>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare birthDay: Date;
  declare createdAt: CreationOptional<Date>;
  declare modifiedAt: CreationOptional<Date>;
}

export const initMember = (sequelize: Sequelize) => {
  Member.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthDay: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: "birth_day",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      modifiedAt: { type: DataTypes.DATE, field: "modified_at" },
    },
    {
      modelName: "Member",
      tableName: "t_member",
      timestamps: true,
      sequelize,
    }
  );
};
