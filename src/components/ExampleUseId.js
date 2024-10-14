import React, {
  useDeferredValue,
  useId,
  useMemo,
  useState,
  useTransition,
} from "react";
import StudentList from "./StudentList";
import studentListData from "./mocks/studentList.json";

export default function ExampleUseId() {
  const id = useId();
  const [searchTextInput, setSearchTextInput] = useState("");
  // const [filterText, setFilterText] = useState("");
  // const [isPending, startTransition] = useTransition();

  const deferedValue = useDeferredValue(searchTextInput);
  const data = useMemo(() => {
    return studentListData.map((student) => {
      const index = student.indexOf(deferedValue);
      return index === -1 ? (
        <p>{student}</p>
      ) : (
        <p>
          {student.slice(0, index)}
          <span style={{ backgroundColor: "yellow" }}>
            {student.slice(index, index + deferedValue.length)}
          </span>
          <span>{student.slice(index + deferedValue.length)}</span>
        </p>
      );
    });
  }, [deferedValue]);
  const handleSearchInputChange = (e) => {
    setSearchTextInput(e.target.value);
    // startTransition(() => {
    //   setFilterText(e.target.value);
    // });
  };
  return (
    <div>
      <h3>Form</h3>
      <label htmlFor={id}>Search Name</label>
      <input
        type="text"
        name="name"
        id={id}
        value={searchTextInput}
        onChange={handleSearchInputChange}
      ></input>
      {/* {isPending ? (
        <p>Loading...</p>
      ) : (
        <StudentList data={[data]}></StudentList>
      )} */}
      <StudentList data={[data]}></StudentList>
    </div>
  );
}
