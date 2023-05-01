import styled from "styled-components";

interface Props {
  callback?: any;
  text: string|React.ReactElement;
  disabled?: boolean;
  styleClass: string;
}

export default function Button({ text, callback, disabled, styleClass }:Props) {
  return (
    <Container
      onClick={callback}
      disabled={disabled}
      className={styleClass}
    >
      {text}
    </Container>
  )
}

export const Container = styled.button`
  position: relative;
  outline: none;
  border: none;

  // size

  &.btn_56 {
    width: 353px;
    height: 56px;
    font-size: 18px;
    line-height: 26px;
    border-radius: 60px;
  }

  // type

  &.default {
    color: #FFF;
    background-color: #7C7C7C;   
  }

  &.variant2 {
    background-color: #FFF;
  }
`