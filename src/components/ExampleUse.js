import React, { useEffect, useRef, useState } from "react";

export default function ExampleUse() {
  const countRef = useRef(0);
  const refInput = useRef(null);

  useEffect(() => {
    refInput.current.focus();
  });

  const [count, setCount] = useState(0);
  let obj = {
    current: 0,
  };

  const handleClick = () => {
    setCount(count + 1);
    countRef.current = countRef.current + 1;
    obj.current = obj.current + 1;
  };
  console.log(count, countRef, obj.current);
  return (
    <div>
      <input type="text" ref={refInput}></input>
      <button onClick={handleClick}>Click Button</button>
    </div>
  );
}
