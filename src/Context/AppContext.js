import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isDay, setIsDay] = useState(true);

  const themeStyle = {
    day: {
      backgroundColor: "rgb(228,228,228)",
      color: "black",
    },
    night: {
      backgroundColor: "black",
      color: "white",
    },
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
      .then((res) => res.json())
      .then((res) => {
        setUserData(res.data);
      });
  }, []);
  return (
    <AppContext.Provider
      value={{
        userData,
        isOpen,
        setIsOpen,
        isDay,
        setIsDay,
        themeStyle: themeStyle[isDay ? "day" : "night"],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
