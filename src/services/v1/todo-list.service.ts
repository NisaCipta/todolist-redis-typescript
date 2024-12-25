import { getTodoByIDRepository, getAllTodosRepository, createTodoRepository, updateTodoRepository, deleteTodoRepository } from "../../repositories/v1/todo-list.repository";
import { redisClient } from "../../configs/redis.config";

export const getTodoByIDService = async (id: number) => {
  try {
    const data = await getTodoByIDRepository(id);
    return data;
  } catch (err: any) {
    throw new Error("Unable to get Todo By ID");
  }
};

export const getAllTodosService = async () => {
  try {
    const cachedData = await redisClient.get("todos");
    console.log(cachedData, 678);
    if (cachedData) {
      console.log("Cache hit");
      const dataRedis = JSON.parse(cachedData);
      console.log(dataRedis, 987656);
      return dataRedis;
    }

    console.log("Cache miss");

    const data = await getAllTodosRepository();

    await redisClient.set("todos", JSON.stringify(data), { EX: 3600 });

    return data;
  } catch (err: any) {
    console.log(err, 111);
    throw new Error("Unable to get all Todo");
  }
};

export const createTodoService = async (name: string, detail: string) => {
  try {
    const data = await createTodoRepository(name, detail);
    return data;
  } catch (err: any) {
    throw new Error("Unable to create Todo");
  }
};

export const updateTodoService = async (id: number, name: string, detail: string) => {
  try {
    const data = await updateTodoRepository(id, name, detail);
    return data;
  } catch (err: any) {
    throw new Error("Unable to update Todo");
  }
};

export const deleteTodoService = async (id: number) => {
  try {
    const data = await deleteTodoRepository(id);
    return data;
  } catch (err: any) {
    throw new Error("Unable to update Todo");
  }
};
