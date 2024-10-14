import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

export default function Content() {
  const { isOpen, setIsOpen } = useContext(AppContext);
  return (
    <div
      className="content"
      style={{
        padding: "10px",
        backgroundColor: "rgb(288,288,288)",
        gridColumn: isOpen ? "2/4" : "1/4",
      }}
    >
      lorem
    </div>
  );
}
