import React, { useState } from 'react';

type Props = {
  addTodo: AddTodo;
};

const AddForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  return (
    <form>
      <input
        type='text'
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button
        type='submit'
        onClick={(event) => {
          event.preventDefault();
          addTodo(text);
          setText('');
        }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddForm;
