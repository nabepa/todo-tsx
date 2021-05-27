import React, { FormEvent, useRef } from 'react';
import styled from 'styled-components';

type Props = {
  columnId: ColumnId;
  addTask: AddTask;
};

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  font-weight: 900;
  text-align: center;
  border: 0;
  outline: 0;
  margin: 0.3rem 0;
  &:focus::placeholder {
    opacity: 0;
  }
`;

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
    <Form ref={formRef} onSubmit={onSubmit}>
      <Input ref={inputRef} type='text' placeholder='+' />
    </Form>
  );
};

export default AddForm;
