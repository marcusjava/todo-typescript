import React, { useContext, useState } from "react";
import { Todo } from "../types";

// import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}

export interface CtxProps {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
}

export const TodoContext = React.createContext<CtxProps>({
  todos: [],
  addTodo: (todo) => console.warn("no todo provided yet"),
  updateTodo: (todo) => console.warn("no todo provided yet"),
  deleteTodo: (todo) => console.warn("no todo provided yet"),
});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todos);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.description === todo.description ? todo : t)));
  };

  const deleteTodo = (todo: Todo) => {
    setTodos(todos.filter((t) => t.description !== todo.description));
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
