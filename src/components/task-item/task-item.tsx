import React, { memo } from 'react';
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';
import styled from 'styled-components';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

type ItemStyle = {
  'data-is-dragging': boolean;
};
const Item = styled.li<ItemStyle>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.3rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => (props['data-is-dragging'] ? '#fad301' : '#000')};
`;

type Props = {
  key: string;
  columnId: ColumnId;
  task: Task;
  index: number;
  removeTask: RemoveTask;
};

const TaskItem: React.FC<Props> = memo(
  ({ columnId, task, index, removeTask }) => {
    const onClick = () => {
      removeTask(columnId, task, index);
    };
    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
          <Item
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            data-is-dragging={snapshot.isDragging}
          >
            <p>{task.name}</p>
            <DeleteOutlinedIcon onClick={onClick} />
          </Item>
        )}
      </Draggable>
    );
  }
);

export default TaskItem;
