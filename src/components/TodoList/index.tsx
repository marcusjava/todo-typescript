import React from "react";
import { Todo } from "../../types";
import TodoItem from "../Todo";

import { Container } from "./styles";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <Container>
      <ul>
        {todos?.map((todo, key) => (
          <TodoItem todo={todo} key={key} setTodos={setTodos} />
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
