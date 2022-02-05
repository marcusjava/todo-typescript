import React from "react";
import { Todo } from "../../types";
import { Container } from "./styles";
import CheckBox from "../CheckBox";

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({ todo, setTodos }: Props) => {
  return <CheckBox setTodos={setTodos}>{todo.description}</CheckBox>;
};

export default TodoItem;
