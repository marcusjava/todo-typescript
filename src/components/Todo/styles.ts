import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  background-color: #797a81;
  border-radius: 15px;
  padding: 0 20px;
  gap: 25px;
`;

export const Description = styled.h1`
  font-weight: bold;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })``;

export const Checkbox = styled.input`
  font-size: 30px;
`;
