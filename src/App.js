import React from "react";
import  Person from "./component/person";




class App extends React.Component{
constructor(){
  super();
  this.state={
     data:[
          {name:"hamed",family:"zabihi",city:"teh"},
          {name:"obeyid",family:"zakani",city:"ghazvin"},
          {name:"saadi",family:"shirazi",city:"shiraz"}
        ]
};
}



  render(){
 
    const persoe=this.state.data;
    console.log("1"+persoe);
    return(
    
      <div>
        <h1>hi </h1>
        <Person persons={persoe}/>
      </div>
    );
  }
}

export default App;