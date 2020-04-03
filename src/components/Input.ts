import styled from "styled-components";

const Input = styled.input`
  background: #f8f8f8;
  border: 1px solid rgb(219, 219, 219);
  padding: 5px;
  box-shadow: unset;
  width: calc(100% - 10px);
  font-size: 14px;
  outline: none;
  appearance: none;
  border-radius: 5px;

  &:focus {
    box-shadow: unset;
  }
`;

export default Input;