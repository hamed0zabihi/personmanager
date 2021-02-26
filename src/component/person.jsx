import React from "react";
import SinlgePerson from "./singleperson";



const Person = ({persons}) => {
    return (
        <div>
            { persons.map(perso => (
                <SinlgePerson 
                    name={perso.name}
                    family={perso.family}
                    city={perso.city}
                />
            ))}
        </div>
    );
};


export default Person;