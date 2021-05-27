import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Item = styled.li``;

type Props = {
  key: string;
  task: Task;
  index: number;
  // toggleTask: ToggleTask;
};

const TaskItem: React.FC<Props> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Item
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task.name}
        </Item>
      )}
    </Draggable>
  );
};

// const TaskItem: React.FC<Props> = ({ task }) => {
//   return (
//     <li>
//         style={{ textDecoration: task.complete ? 'line-through' : undefined }}
//       >
//         <input
//           type='checkbox'
//           checked={task.complete}
//           // onClick={() => {
//           //   toggleTask(task);
//           // }}
//           onChange={() => {
//             toggleTask(task);
//           }}
//         />
//         {''}
//         {task.text}
//     </li>
//   );
// };

export default TaskItem;
