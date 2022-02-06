import React from "react";
import { Todo } from "../../types";
import { Container } from "./styles";
import CheckBox from "../CheckBox";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  return <CheckBox todo={todo} />;
};

export default TodoItem;
