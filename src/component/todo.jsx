import React from "react";
import ExampleContext from "../context/ExampleContext";
import AddPersons from "./AddPerson";
import ShowPerson from "./ShowPerson";
import { toast } from "react-toastify";

class Todo extends React.Component {
  state = {
    data: [],
    valueInput: "",
    // showPerson: false,
    show: false,
  }; //end state
  handleDeletePerson = (id) => {
    let datafordelet = [...this.state.data];
    let newdata = datafordelet.filter((p) => p.id !== id);
    this.setState({ data: newdata });

    const indexpersondelete = datafordelet.findIndex((d) => d.id === id);

    toast.dark(`delete ${datafordelet[indexpersondelete].name} `, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  editpersons = (event, id) => {
    const data = [...this.state.data];
    const dataIndex = data.findIndex((p) => p.id === id);
    data[dataIndex].name = event.target.value;
    const person = data[dataIndex];
    data[dataIndex] = person;
    this.setState({ data: data });
  };
  handleInput = (event) => {
    const addPerson = event.target.value;
    this.setState({ valueInput: addPerson });
  };

  addPerson = () => {
    const value = this.state.valueInput;
    if ((value !== "") & (value !== " ")) {
      const data = [...this.state.data];
      const newData = {
        id: Math.floor(Math.random() * 1000),
        name: this.state.valueInput,
      };
      data.push(newData);
      this.setState({ data: data, valueInput: "" });

      toast.dark(`success:add ${newData.name} is new person`, {
        fontFamily: "Monaco",
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  handleshowPerson = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <ExampleContext.Provider
          value={{
            state: this.state,
            handleDeletePerson: this.handleDeletePerson,
            editpersons: this.editpersons,
            handleInput: this.handleInput,
            addPerson: this.addPerson,
            handleshowPerson: this.handleshowPerson,
          }}
        >
          <AddPersons />
          <ShowPerson />
        </ExampleContext.Provider>
      </div>
    );
  }
}
export default Todo;
