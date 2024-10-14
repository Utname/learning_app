import React, { useEffect, useState } from "react";

export default React.memo(
  function ChildComponent({ getData }) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
      console.log("Child Component - useEffect - getData");
      getData("comments")
        .then((res) => res.json())
        .then((res) => {
          const comments = res.data;
          setComments(comments);
        });
    }, [getData]);

    return (
      <div>
        <p>Child Comment:</p>
        <p>{JSON.stringify(comments)}</p>
      </div>
    );
  },
  (prevProp, nextProp) => {
    return prevProp === nextProp;
  }
);
