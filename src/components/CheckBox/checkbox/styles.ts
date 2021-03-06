import styled from "styled-components/macro";

interface Props {
  checked: boolean;
}

export const Container = styled.div<Props>`
  padding-left: 5px;
  margin: 0px 4px;
  border-radius: 15px;
  padding: 0 25px;
  background-color: ${(props) => (props.checked ? "#97C160" : "#E5E5E5")};
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TrashIcon = styled.button<Props>`
  border: 0;
  outline: none;
  padding: 15px;
  cursor: pointer;
  font-size: 30px;
  border-radius: 50%;
  background-color: transparent;
  &:hover {
    background-color: ${(props) => (props.checked ? "#E5E5E5" : "#97C160")};
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
`;
export const Text = styled.h1<Props>`
  color: ${(props) => (props.checked ? "#FFF" : "#555")};
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;
export const StyledCheckbox = styled.label<Props>`
  width: 35px;
  height: 35px;
  margin-right: 6px;

  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: ${(props) => (props.checked ? "flex" : "none")};
  }
`;
