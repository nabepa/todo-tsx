import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import TaskColumn from './components/task-column/task-column';
import initialTasksData from './common/initial-task-data';

const Container = styled.div`
  display: flex;
`;

function App() {
  const [tasksData, setTasksData] = useState<TasksData>(initialTasksData);

  const onDragEnd = (result: DropResult): void => {
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

    const startColumn: Column = tasksData.columns[source.droppableId];
    const finishColumn: Column = tasksData.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      setTasksData((prevTasksData) => {
        const newTaskIds: TaskId[] = [...startColumn.taskIds];
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
        const startTasksIds: TaskId[] = [...startColumn.taskIds];
        startTasksIds.splice(source.index, 1);

        const newStartColumn: Column = {
          ...startColumn,
          taskIds: startTasksIds,
        };

        const finishTaskIds: TaskId[] = [...finishColumn.taskIds];
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

  // const addTask:AddTask = () => {};

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {tasksData.columnsOrder.map((columnId: ColumnId) => {
          const column = tasksData.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId: TaskId) => tasksData.tasks[taskId]
          );

          return <TaskColumn key={columnId} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    </Container>
  );
}

export default App;
