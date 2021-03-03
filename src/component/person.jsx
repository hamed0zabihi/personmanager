import React from "react";
import SinglePerson from "./singleperson";

const Person = ({ person, deleteperson, editperson }) => {
  return (
    <div>
      {person.map((persons) => (
        <SinglePerson
          key={persons.id}
          name={persons.name}
          deleted={() => deleteperson(persons.id)}
          edited={(event) => editperson(event, persons.id)}
        />
      ))}
    </div>
  );
};
export default Person;
