import React, { useState } from "react";
import Icon from "../../assets/check2.png";
import { Todo } from "../../types";
import { Container, HiddenCheckbox, Text, StyledCheckbox } from "./styles";

interface Props {
  children: React.ReactNode;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const CheckBox = ({ children, setTodos }: Props) => {
  const [checked, setChecked] = useState(false);

  const handleCheckoxChange = () => {
    setChecked(!checked);
  };
  return (
    <Container checked={checked} onClick={handleCheckoxChange}>
      <HiddenCheckbox checked={checked} readOnly />
      <StyledCheckbox checked={checked}>
        <img alt="tick icon" style={{ width: "15px" }} src={Icon} />
      </StyledCheckbox>
      <Text checked={checked}>{children}</Text>
    </Container>
  );
};

export default CheckBox;
