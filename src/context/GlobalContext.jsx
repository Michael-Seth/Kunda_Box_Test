import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [allNames, setAllNames] = useState([]);
  const [editName, setEditName] = useState({
    name: {},
    edit: false,
  });

  const addName = (names) => {
    const nameslist = names.split(",").map((word) => word.trim());
    setAllNames((prevNames) => [
      ...prevNames,
      ...nameslist.map((name) => ({ id: uuidv4(), name })),
    ]);
  };
  const namesEdit = (name) => {
    setEditName({
      name,
      edit: true,
    });
  };

  const updateName = (id, data) => {
    console.log(data);
    setAllNames((prevNames) =>
      prevNames.map((name) =>
        name.id === id ? { ...name, name: data.name } : name
      )
    );
  };

  const deleteName = (name) => {
    //console.log(name);
    setAllNames(allNames.filter((item) => item.id !== name));
  };

  return (
    <GlobalContext.Provider
      value={{
        addName,
        deleteName,
        allNames,
        editName,
        namesEdit,
        updateName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
