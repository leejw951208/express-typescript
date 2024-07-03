import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { Team } from "../database/model/team";
import sequelize from "../database";

export const createTeam: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new Error("Validation failed");
  }
  const name = (req.body as { name: string }).name;

  const t = await sequelize.transaction();
  try {
    const savedTeam = await Team.create({ name }, { transaction: t });
    await t.commit();
    res.status(201).json({ message: "Created the team.", team: savedTeam });
  } catch (error) {
    await t.rollback();
    throw error;
  }
};
