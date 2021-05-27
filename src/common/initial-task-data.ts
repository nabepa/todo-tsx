const initialTasksData: TasksData = {
  tasks: {
    'task-1': { id: 'task-1', name: 'Study TypeScript' },
    'task-2': {
      id: 'task-2',
      name: 'Practice React with TypeScript',
    },
    'task-3': { id: 'task-3', name: 'Study English' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: ['task-2'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-1'],
    },
  },
  columnsOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialTasksData;
