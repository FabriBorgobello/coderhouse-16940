import * as React from "react";

const UserContext = React.createContext("");

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = React.useState("Carlos");

  function saludar() {
    console.log(`Hola, ${userName}!`);
  }

  return <UserContext.Provider value={{ userName, setUserName, saludar }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("El hook useUser debe ser usado dentro de un UserProvider. No seas pavo.");
  }

  return context;
};
