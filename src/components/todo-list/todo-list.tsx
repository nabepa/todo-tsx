import React from 'react';
import TodoItem from '../todo-item/todo-item';

type Props = {
  todos: Todo[];
  toggleTodo: ToggleTodo;
};

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
