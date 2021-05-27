import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import TaskColumn from './components/task-column/task-column';

const Container = styled.div`
  display: flex;
`;

const initialTasksData: TasksData = {
  tasks: {
    'task-1': { id: 'task-1', name: 'Study TypeScript', state: 'done' },
    'task-2': {
      id: 'task-2',
      name: 'Practice React with TypeScript',
      state: 'in-progress',
    },
    'task-3': { id: 'task-3', name: 'Study English', state: 'todo' },
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

function App() {
  const [tasksData, setTasksData] = useState<TasksData>(initialTasksData);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = tasksData.columns[source.droppableId];
    const finishColumn = tasksData.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      setTasksData((prevTasksData) => {
        const newTaskIds = [...startColumn.taskIds];
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn: Column = {
          ...startColumn,
          taskIds: newTaskIds,
        };

        const newTasksData: TasksData = {
          ...prevTasksData,
          columns: {
            ...prevTasksData.columns,
            [newColumn.id]: newColumn,
          },
        };

        return newTasksData;
      });
    } else {
      setTasksData((prevTasksData) => {
        const startTasksIds = [...startColumn.taskIds];
        startTasksIds.splice(source.index, 1);

        const newStartColumn: Column = {
          ...startColumn,
          taskIds: startTasksIds,
        };

        const finishTaskIds = [...finishColumn.taskIds];
        finishTaskIds.splice(destination.index, 0, draggableId);

        const newFinishColumn: Column = {
          ...finishColumn,
          taskIds: finishTaskIds,
        };

        const newTasksData: TasksData = {
          ...prevTasksData,
          columns: {
            ...prevTasksData.columns,
            [newStartColumn.id]: newStartColumn,
            [newFinishColumn.id]: newFinishColumn,
          },
        };

        return newTasksData;
      });
    }
  };
  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {tasksData.columnsOrder.map((columnId) => {
          const column = tasksData.columns[columnId];
          const tasks = column.taskIds.map((taskId) => tasksData.tasks[taskId]);

          return <TaskColumn key={columnId} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    </Container>
  );
}

export default App;
