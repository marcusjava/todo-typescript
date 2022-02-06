import React, { useState } from "react";
import Icon from "../../assets/check2.png";
import { useTodo } from "../../context/todo";
import { Todo } from "../../types";
import {
  Container,
  HiddenCheckbox,
  Text,
  StyledCheckbox,
  CheckBoxContainer,
  TrashIcon,
} from "./styles";
import { BsFillTrashFill } from "react-icons/bs";

interface Props {
  todo: Todo;
}

const CheckBox = ({ todo }: Props) => {
  const [checked, setChecked] = useState(false);
  const { updateTodo, deleteTodo } = useTodo();

  const handleCheckoxChange = () => {
    if (checked) {
      updateTodo({ ...todo, completed: false });
      setChecked(false);
    } else {
      updateTodo({ ...todo, completed: true });
      setChecked(true);
    }
  };
  return (
    <Container checked={checked}>
      <CheckBoxContainer>
        <HiddenCheckbox checked={checked} readOnly />
        <StyledCheckbox checked={checked} onClick={handleCheckoxChange}>
          <img alt="tick icon" style={{ width: "15px" }} src={Icon} />
        </StyledCheckbox>
        <Text checked={checked}>{todo.description}</Text>
      </CheckBoxContainer>
      <TrashIcon onClick={() => deleteTodo(todo)}>
        <BsFillTrashFill />
      </TrashIcon>
    </Container>
  );
};

export default CheckBox;
