import React from "react";
import { useTodo } from "../../context/todo";
import { Todo } from "../../types";
import TodoItem from "../Todo";

import { Container, NoItems } from "./styles";

const TodoList = () => {
  const { todos } = useTodo();

  if (!todos.length) {
    return (
      <Container>
        <NoItems>Sem tarefas</NoItems>
      </Container>
    );
  }
  return (
    <Container>
      <ul>
        {todos?.map((todo, key) => (
          <TodoItem todo={todo} key={key} />
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
