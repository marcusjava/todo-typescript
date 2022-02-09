import { Container, Content, Header } from "./App.styles";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container>
      <Content>
        <Header>Todo App With Typescript</Header>
        <TodoAdd />
        <TodoList />
      </Content>
    </Container>
  );
}

export default App;
