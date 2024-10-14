import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

export default function Header() {
  const { userData, isOpen, setIsOpen, themeStyle, setIsDay, isDay } =
    useContext(AppContext);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const tonggleTheme = () => {
    setIsDay(!isDay);
  };
  return (
    <div
      className="header"
      style={{
        ...themeStyle,
        display: "flex",
        justifyContent: "right",

        padding: "10px",
        gridColumn: isOpen ? "2 / 4" : "1 / 4",
        gridRow: "1 / 2",
      }}
    >
      <div>Hello</div>
      <p style={{ cursor: "pointer" }} onClick={toggleSidebar}>
        My profile {userData.first_name} {userData.last_name}
      </p>
      <label className="switch">
        <input type="checkbox" checked={isDay} onChange={tonggleTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
