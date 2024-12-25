import { TodoListType } from "../../models/v1/todo-list.model";
import connection from "../../configs/db.config";

// get todo
// get todo list
// create todo
// update todo
// list todo

export const getTodoByIDRepository = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    connection.query<TodoListType[0]>(`SELECT * FROM todolist WHERE id = ?`, [id], (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const getAllTodosRepository = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    connection.query<TodoListType[0]>(`SELECT * FROM todolist`, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const createTodoRepository = (name: string, detail: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    connection.query(
      `
        INSERT INTO todolist (name, detail) VALUES (?,?)`,
      [name, detail],
      (err, res) => {
        if (err) reject(err);
        else resolve(res);
      }
    );
  });
};

export const updateTodoRepository = (id: number, name: string, detail: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    connection.query<TodoListType[]>(
      `UPDATE todolist 
        SET name = ?, detail = ? WHERE id = ?`,
      [name, detail, id],
      (err, res) => {
        if (err) reject(err);
        else resolve(res);
      }
    );
  });
};

export const deleteTodoRepository = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    connection.query<TodoListType[]>(`DELETE FROM todolist WHERE id =?`, [id], (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};
