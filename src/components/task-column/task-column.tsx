import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import AddForm from '../add-form/add-form';
import TaskItem from '../task-item/task-item';

const Container = styled.div``;
const Title = styled.h2`
  padding: 0.5rem;
`;
const TaskList = styled.ul`
  margin: 1rem;
  padding: 0;
  background-color: wheat;
  list-style: none;
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
