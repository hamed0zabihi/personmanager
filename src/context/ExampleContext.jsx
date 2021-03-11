import { createContext } from "react";

const ExampleContex = createContext({
  state: {},
  handleDeletePerson: () => {},
  editpersons: () => {},
  handleInput: () => {},
  addPerson: () => {},
  handleshowPerson: () => {},
});

export default ExampleContex;
