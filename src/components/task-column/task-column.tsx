import React, { memo } from 'react';
import {
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd';
import styled from 'styled-components';
import AddForm from '../add-form/add-form';
import TaskItem from '../task-item/task-item';

const Container = styled.div`
  width: 30vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 2px solid #000;
`;

const Title = styled.h2`
  padding: 0.5rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
`;

type TaskListStyle = {
  'data-is-dragging-over': boolean;
};

const TaskList = styled.ul<TaskListStyle>`
  height: 100%;
  margin-top: 0.3rem;
  padding: 0.5rem;
  list-style: none;
  overflow-y: auto;
  background-color: ${(props) =>
    props['data-is-dragging-over'] ? 'rgba(241, 209, 0, 0.1)' : 'white'};
`;

type Props = {
  key: string;
  column: Column;
  tasks: Task[];
  addTask: AddTask;
  removeTask: RemoveTask;
};

const TaskColumn: React.FC<Props> = memo(
  ({ column, tasks, addTask, removeTask }) => {
    return (
      <Container>
        <Title>{column.title}</Title>
        <Droppable droppableId={column.id}>
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              data-is-dragging-over={snapshot.isDraggingOver}
            >
              {tasks.map((task, index) => (
                <TaskItem
                  key={task.id}
                  columnId={column.id}
                  task={task}
                  index={index}
                  removeTask={removeTask}
                />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
        <AddForm columnId={column.id} addTask={addTask} />
      </Container>
    );
  }
);

export default TaskColumn;
