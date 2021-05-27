import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
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

const TaskList = styled.ul`
  height: 100%;
  margin-top: 0.3rem;
  padding: 0.5rem;
  list-style: none;
  overflow-y: auto;
`;

type Props = {
  key: string;
  column: Column;
  tasks: Task[];
  addTask: AddTask;
  removeTask: RemoveTask;
};

const TaskColumn: React.FC<Props> = ({
  column,
  tasks,
  addTask,
  removeTask,
}) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
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
};

export default TaskColumn;
