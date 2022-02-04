import React, { useState } from "react";
import { Todo } from "../../types";

import { Input } from "./styles";

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoAdd = ({ setTodos }: Props) => {
  const [todo, setTodo] = useState<Todo>({ description: "", completed: false });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.description) {
      alert("Preencha a descrição da tarefa");
      return;
    }
    setTodos((todos) => [...todos, todo]);
    setTodo({ description: "", completed: false });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Adicione uma tarefa"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
    </form>
  );
};

export default TodoAdd;
