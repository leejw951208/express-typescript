import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import sequelize from "./database";

import teamRouter from "./router/team";

const app = express();

app.use(json());

app.use("/api", teamRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

sequelize
  .sync({
    force: false,
  })
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
