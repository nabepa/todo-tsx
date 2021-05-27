import React, { FormEvent, useRef } from 'react';

type Props = {
  columnId: ColumnId;
  addTask: AddTask;
};
const AddForm: React.FC<Props> = ({ columnId, addTask }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent): void => {
    event.preventDefault();
    if (inputRef.current?.value) {
      const task: Task = {
        id: Date.now().toString(),
        name: inputRef.current?.value || '',
      };
      addTask(columnId, task);
      formRef.current?.reset();
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <input ref={inputRef} type='text' placeholder='+' />
    </form>
  );
};

export default AddForm;
