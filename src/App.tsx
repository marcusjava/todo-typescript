import React, { useState } from "react";
import { Container, Content, Header } from "./App.styles";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <Container>
      <Content>
        <Header>Todo App With Typescript</Header>
        <TodoAdd setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Content>
    </Container>
  );
}

export default App;
