import React from "react";
import Button from "@atlaskit/button";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";
import { useState } from "react";
import Textfield from "@atlaskit/textfield";

const Container = styled.div`
  display: flex;
`;

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;
  &,
  &:hover {
    ${(p) =>
      p.isCompleted &&
      css`
        text-decoration: line-through;
      `}
  }

  &,
  &:hover {
    .check-icon {
      display: inline-block;
    }
  }

  .check-icon {
    display: none;
    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`;

export default function Todo({ todo, onCheckBtnClick, editTodo, removeTodo }) {
  const [isVisible, setIsVisible] = useState(false);
  const handleEditClick = () => {
    setIsVisible(true);
  };

  const onTextChangeToDo = (e) => {
    setTextInput(e.target.value);
  };

  const [textInput, setTextInput] = useState(todo.name);
  return (
    <>
      {!isVisible && (
        <Container className="container ">
          <ButtonStyled
            isCompleted={todo.isCompleted}
            shouldFitContainer
            iconAfter={
              !todo.isCompleted && (
                <span
                  className="check-icon"
                  onClick={() => onCheckBtnClick(todo.id)}
                >
                  <CheckIcon primaryColor="#4fff4f"></CheckIcon>
                </span>
              )
            }
          >
            {todo.name}
          </ButtonStyled>
          <span className="edit-click" onClick={handleEditClick}>
            Sửa
          </span>
          <span
            onClick={() => {
              removeTodo(todo);
            }}
          >
            Xóa
          </span>
        </Container>
      )}
      {isVisible && (
        <Textfield
          name="edit-todo"
          css={{ padding: "2px 4px 2px" }}
          value={textInput}
          onChange={onTextChangeToDo}
          elemAfterInput={
            <Button
              isDisabled={!textInput}
              onClick={() => {
                todo.name = textInput;
                editTodo(todo);
                setIsVisible(false);
              }}
              appearance="primary"
            >
              Cập nhật
            </Button>
          }
        ></Textfield>
      )}
    </>
  );
}
