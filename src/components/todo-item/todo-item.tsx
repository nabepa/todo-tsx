import React from 'react';

type Props = {
  todo: Todo;
  toggleTodo: ToggleTodo;
};

const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input
          type='checkbox'
          checked={todo.complete}
          // onClick={() => {
          //   toggleTodo(todo);
          // }}
          onChange={() => {
            toggleTodo(todo);
          }}
        />
        {''}
        {todo.text}
      </label>
    </li>
  );
};

export default TodoItem;
