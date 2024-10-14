import React, { useCallback, useEffect, useMemo, useState } from "react";
import ChildComponent from "./ChildComponent";

function NewComponent({ childre }) {
  const [users, setUsers] = useState([]);
  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);

  const handleClickType = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };
  return (
    <>
      <p>User:{JSON.stringify(users)}</p>
      <div>
        <p>Data:</p>
        <button onClick={handleClickType}>Get users Datas</button>
        <p>User:{JSON.stringify(users)}</p>
        {childre}
      </div>
    </>
  );
}

export default function ExampleFunction() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");
  const [numberE, setNumberE] = useState(20);
  const [user, setUser] = useState({
    name: "Út",
    age: 12,
  });

  const [users, setUsers] = useState([]);
  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);

  const handleClickType = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };

  const handleClick = () => {
    setUser({ name: "Updated" });
  };

  const number = useMemo(() => {
    console.log("useMemo");
    expensiveFuntion(numberE);
  }, [numberE]);

  function expensiveFuntion(number) {
    return number * number;
  }

  useEffect(() => {
    fetch(`https://reqres.in/api/${action}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    return () => {
      console.log("destroy");
    };
  }, [action]);

  return (
    <div>
      <NewComponent>
        <ChildComponent getData={getData}></ChildComponent>
        <button onClick={() => setAction("users")}>Users</button>
        <button onClick={() => setAction("comments")}>Comments</button>
      </NewComponent>
    </div>
  );
}
