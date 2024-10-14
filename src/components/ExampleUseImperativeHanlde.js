import React, { forwardRef, useImperativeHandle, useState } from "react";

export default forwardRef(function ExampleUseImperativeHanlde(props, ref) {
  const [userInfo, setUserInfo] = useState({
    name: "Út",
    age: 22,
  });

  const submitForm = () => {
    alert("SUBMIT FORM");
  };
  console.log("REF", ref);
  useImperativeHandle(ref, () => {
    return {
      test: () => {
        return userInfo;
      },
      submitForm: submitForm,
    };
  });
  return (
    <div>
      <h3>Login Form</h3>
      <form>
        <label for="user-name">USER NAME</label>
        <input id="user-name" type="text" />
        <br></br>
        <label for="password">PASSWORD</label>
        <input id="password" type="password" />
        <br></br>
        <button onClick={submitForm}>Login</button>
      </form>
    </div>
  );
});
