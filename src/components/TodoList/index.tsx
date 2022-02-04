import React from "react";
import { Todo } from "../../types";

import { Container } from "./styles";

interface Props {
  todos: Todo[];
}

const TodoList = ({ todos }: Props) => {
  return (
    <Container>
      <ul>
        {todos?.map((todo, key) => (
          <li key={key}>{todo.description}</li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
