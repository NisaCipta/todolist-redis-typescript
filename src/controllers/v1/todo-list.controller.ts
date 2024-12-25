import { Request, Response, NextFunction } from "express";
import { getAllTodosService, getTodoByIDService, createTodoService, updateTodoService, deleteTodoService } from "./../../services/v1/todo-list.service";
import { ResponseApi } from "../../utils/response.utils";

export const getTodoByIDController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = await getTodoByIDService(Number(id));
    res.status(200).json(ResponseApi(200, "Success get todo by ID", data));
  } catch (error) {
    next(error);
  }
};

export const getAllTodosController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getAllTodosService();
    res.status(200).json(ResponseApi(200, "Success get all todos", data));
  } catch (error) {
    next(error);
  }
};

export const createTodoController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, detail } = req.body;
    const data = await createTodoService(name, detail);
    res.status(200).json(ResponseApi(200, "Success create todo", data));
  } catch (error) {
    next(error);
  }
};

export const updateTodoController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, detail } = req.body;
    const data = await updateTodoService(Number(id), name, detail);
    res.status(200).json(ResponseApi(200, "Success update todo", data));
  } catch (error) {
    next(error);
  }
};

export const deleteTodoController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await deleteTodoService(Number(id));
    res.status(200).json(ResponseApi(200, "Success delete todo"));
  } catch (error) {
    next(error);
  }
};
