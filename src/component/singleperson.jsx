import React from "react";



const SinlgePerson=({name,family,city,persondeleted,edited})=>{
    return(
        <div>
           name and family:{name} {family} lives in :{city}
           <input placeholder={name} onChange={edited} />
           <button onClick={persondeleted}>delete</button>
        </div>

    );

}
export default SinlgePerson;