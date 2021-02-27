import React from "react";
import  Person from "./component/person";




class App extends React.Component{
constructor(){
  super();
  this.state={
     data:[
          {id:1,name:"hamed",family:"zabihi",city:"teh"},
          {id:2,name:"obeyid",family:"zakani",city:"ghazvin"},
          {id:3,name:"saadi",family:"shirazi",city:"shiraz"}
        ],
        showPerson:false
}
}
 handleShowPerson=()=>{
  this.setState({showPerson:!this.state.showPerson});
  console.log( this.state);

}
handleDeletePerson=(id)=>{

  const data=[...this.state.data];
  const filterPerson=data.filter(p => p.id!==id);
  this.setState({data:filterPerson});
}
handleEditPerson=(event,id)=>{
  const data=[...this.state.data];
  const dataIndex=data.findIndex(p=>p.id ===id);
  const person=data[dataIndex];
  person.name=event.target.value;
  data[dataIndex]=person;
  this.setState({data:data});

}

  render(){
 
    const {data,showPerson}=this.state;
    console.log("1",data);
    let forShow=null;
    if (showPerson){ forShow=<Person persons={data} rsondelete={this.handleDeletePerson} editname={this.handleEditPerson}/>;
    }
    return(
    
      <div>
        <h1>hi </h1>
        تعداد افراد : {data.length}
{forShow}
        <button onClick={this.handleShowPerson}>نمایش اشخاص</button>
      </div>
    );
  }
}

export default App;