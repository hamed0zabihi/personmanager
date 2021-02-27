import React from "react";
import SinlgePerson from "./singleperson";



const Person = ({persons,rsondelete,editname}) => {
    return (
        <div>
            { persons.map(perso => (
                <SinlgePerson 
                    key={perso.id}
                    name={perso.name}
                    family={perso.family}
                    city={perso.city}
                    persondeleted={()=>rsondelete(perso.id)}
                    edited={(event)=>editname(event,perso.id)}
                />
            ))}
        </div>
    );
};


export default Person;