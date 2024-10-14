import { Routes, Route } from "react-router";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import ToDoList from "./components/ToDoList";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useState, useEffect, useRef } from "react";
import { v4 } from "uuid";
import ExampleClass from "./components/EampleClass";
import ExampleFunction from "./components/ExampleFunction";
import ExampleUse from "./components/ExampleUse";
import ExmpleUseReducer from "./components/ExmpleUseReducer";
import CustomUseHook from "./components/CustomUseHook";
import ExampleUseId from "./components/ExampleUseId";
import ExampleUseImperativeHanlde from "./components/ExampleUseImperativeHanlde";
import ExampleUseContext from "./components/ExampleUseContext";
import "./css/style.css";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";
import Header from "./routers/Header";
import Redux from "./Redux/Redux";

const TODO_APP_STORAGE_KEY = "TODO_APP";
function App() {
  // const [todoList, setTodoList] = useState([]);
  // const [textInput, setTextInput] = useState("");
  // const [textInputSearch, setTextInputSearch] = useState("");
  // useEffect(() => {
  //   const storageTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
  //   if (storageTodoList) {
  //     setTodoList(JSON.parse(storageTodoList));
  //   } else {
  //     console.log("LocalStorage is empty");
  //   }
  // }, []);
  // const removeTodo = useCallback(
  //   (todo) => {
  //     var updateToDoList = todoList.filter((todoItem) => todoItem != todo);
  //     setTodoList(updateToDoList);
  //   },
  //   [todoList]
  // );
  // useEffect(() => {
  //   localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  // }, [todoList]);

  // const onTextInptChange = useCallback((e) => {
  //   setTextInput(e.target.value);
  // }, []);

  // const onTextSearchChange = useCallback(
  //   (e) => {
  //     setTextInputSearch(e.target.value);
  //   },
  //   [todoList]
  // );

  // const onAddBtnClick = useCallback(
  //   (e) => {
  //     setTodoList([
  //       { id: v4(), name: textInput, isCompleted: false },
  //       ...todoList,
  //     ]);
  //     setTextInput("");
  //   },
  //   [textInput, todoList]
  // );

  // const onSearchClick = useCallback((e) => {
  //   setTodoList([
  //     ...todoList.filter((q) =>
  //       q.name
  //         .toLocaleLowerCase()
  //         .includes(textInputSearch.trim().toLocaleLowerCase())
  //     ),
  //   ]);
  // });

  // const onCheckBtnClick = useCallback((id) => {
  //   setTodoList((prevState) =>
  //     prevState.map((todo) =>
  //       todo.id === id ? { ...todo, isCompleted: true } : todo
  //     )
  //   );
  // }, []);

  // const editTodo = useCallback(
  //   (todo) => {
  //     setTodoList((prevState) =>
  //       prevState.map((todoItem) =>
  //         todoItem.id === todo.id ? { ...todoItem, name: todo.name } : todoItem
  //       )
  //     );
  //     console.log("todoList:" + todoList);
  //   },
  //   [todoList]
  // );

  // const myRef = useRef(3);
  // useEffect(() => {
  //   const user = myRef.current.test();
  //   console.log("User", user);
  // });
  return (
    <>
      <Redux></Redux>
      <div className="app-header">
        <Header></Header>
      </div>
      <div className="app-content">
        <Outlet></Outlet>
      </div>
      {/* <ExampleUseContext></ExampleUseContext> */}
      {/* <ExampleUseImperativeHanlde ref={myRef}></ExampleUseImperativeHanlde>
      <button onClick={() => myRef.current.submitForm()}>
        Login from Parent Component
      </button>

      <ExampleUseId></ExampleUseId>
      <p>CustomUseHook</p>
      <CustomUseHook></CustomUseHook>
      <ExmpleUseReducer></ExmpleUseReducer>
      <ExampleUse></ExampleUse>
      <ExampleFunction></ExampleFunction>
      <ExampleClass></ExampleClass>
      <h3>Danh sách cần làm</h3>
      <TextField
        name="search-todo"
        placeholder="Tìm kiếm công việc"
        css={{ padding: "2px 4px 2px" }}
        value={textInputSearch}
        onChange={onTextSearchChange}
        elemAfterInput={
          <Button
            isDisabled={!textInputSearch}
            appearance="primary"
            onClick={onSearchClick}
          >
            Tìm kiếm
          </Button>
        }
      ></TextField>

      <TextField
        name="add-todo"
        placeholder="Thêm việc cần làm..."
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            onClick={onAddBtnClick}
            appearance="primary"
          >
            Thêm
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInptChange}
      ></TextField>
      <ToDoList
        todoList={todoList}
        onCheckBtnClick={onCheckBtnClick}
        editTodo={editTodo}
        removeTodo={removeTodo}
      ></ToDoList> */}
    </>
  );
}

export default App;
