import { Router } from "express";
import todoList from "./todo-list.route";

const router = Router();

router.use("/todolist", todoList);

export default router;
