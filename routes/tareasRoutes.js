import { Router } from "express";
import { save, tareas, updateTarea, deleteTarea } from "../controllers/TareasController.js";

const tareasRouter = Router();

tareasRouter.post("/tareas", save);
tareasRouter.get("/tareas", tareas);
tareasRouter.put("/tareas/:id", updateTarea);
tareasRouter.delete("/tareas/:id", deleteTarea);

export default tareasRouter;