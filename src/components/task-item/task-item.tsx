import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Item = styled.li``;

type Props = {
  key: string;
  columnId: ColumnId;
  task: Task;
  index: number;
  removeTask: RemoveTask;
};

const TaskItem: React.FC<Props> = ({ columnId, task, index, removeTask }) => {
  const onClick = () => {
    removeTask(columnId, task, index);
  };
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Item
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task.name}
          <DeleteOutlinedIcon onClick={onClick} />
        </Item>
      )}
    </Draggable>
  );
};

export default TaskItem;
