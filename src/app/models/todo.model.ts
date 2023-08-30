export interface ToDo {
  id: string;
  tittle: string;
}

export interface Column {
  title: string;
  todos: ToDo[];
}
