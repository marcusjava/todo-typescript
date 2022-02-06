import React, { useState } from "react";
import { useTodo } from "../../context/todo";
import { Todo } from "../../types";

import { Input } from "./styles";

const TodoAdd = () => {
  const [todo, setTodo] = useState<Todo>({ description: "", completed: false });
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.description) {
      alert("Preencha a descrição da tarefa");
      return;
    }
    addTodo(todo);
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
