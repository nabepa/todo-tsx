type TaskId = string;

type Task = {
  id: TaskId;
  name: string;
};

type Tasks = Record<TaskId, Task>;

type ColumnId = string;

type Column = {
  id: ColumnId;
  title: string;
  taskIds: TaskId[];
};

type Columns = Record<ColumnId, Column>;

type TasksData = {
  tasks: Tasks;
  columns: Columns;
  columnsOrder: ColumnId[];
};

type AddTask = (columnId: ColumnId, task: Task) => void;

type RemoveTask = (columnId: ColumnId, task: Task, index: number) => void;
