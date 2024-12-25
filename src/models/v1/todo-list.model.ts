import { RowDataPacket } from "mysql2";

export interface TodoListType extends RowDataPacket {
  id: number;
  name: string;
  detail: string;
}
