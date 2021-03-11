import React from "react";
import ExampleContex from "../context/ExampleContext";
import Person from "./person";

const ShowPerson = () => {
  return (
    <ExampleContex.Consumer>
      {(contex) => {
        return (
          <div>
            {contex.state.show ? (
              <Person
                person={contex.state.data}
                deleteperson={contex.handleDeletePerson}
                editperson={contex.editpersons}
              />
            ) : (
              ""
            )}
          </div>
        );
      }}
    </ExampleContex.Consumer>
  );
  // end return
};
export default ShowPerson;
