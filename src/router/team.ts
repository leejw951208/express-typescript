import { Router } from "express";
import { createTeam } from "../controller/team";

const router = Router();

router.post("/teams", createTeam);

router.get("/teams");

router.patch("/teams/:id");

router.delete("/teams/:id");

export default router;
