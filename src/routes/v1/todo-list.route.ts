import { Router } from "express";
import { getTodoByIDController, getAllTodosController, updateTodoController, createTodoController, deleteTodoController } from "../../controllers/v1/todo-list.controller";
const router = Router();

router.get("/get-by-id/:id", getTodoByIDController);
router.get("/get-all", getAllTodosController);
router.post("/create", createTodoController);
router.put("/update/:id", updateTodoController);
router.delete("/delete/:id", deleteTodoController);

export default router;
