type State = 'todo' | 'in-progress' | 'done';

type Task = {
  id: string;
  name: string;
  state: State;
};

type Tasks = {
  [id: string]: Task;
};

type Column = {
  id: string;
  title: string;
  taskIds: string[];
};

type Columns = {
  [id: string]: Column;
};

type TasksData = {
  tasks: Tasks;
  columns: Columns;
  columnsOrder: string[];
};

// type ToggleTodo = (selectedTodo: Todo) => void;

// type AddTodo = (text: string) => void;
