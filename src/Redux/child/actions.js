import { type } from "@testing-library/user-event/dist/type";

export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
export const toggleToDoStatus = (todoId) => {
  return {
    type: "todoList/toggleToDoStatus",
    payload: todoId,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  return {
    type: "filters/prioritiesFilterChange",
    payload: priorities,
  };
};
