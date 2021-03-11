import React from "react";
import ExampleContext from "./context/ExampleContext";
import AddPersons from "./component/AddPerson";
import ShowPerson from "./component/ShowPerson";
import { toast } from "react-toastify";
import FirstHoc from "./hoc/firsthoc";
import secondcomponenthoc from "./hoc/secondcomponenthoc";

class App extends React.Component {
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

    toast.error(`delete ${datafordelet[indexpersondelete].name} `, {
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

      toast.success("success:add new person", {
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

  // lifecycle
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidMount() {
    console.log("componentdidmout");
  }
  componentWillUpdate(nextProp, nextState, nextContex) {
    console.log("componentWillUpdate", nextProp, nextState, nextContex);
  }
  componentDidUpdate(prevtProp, prevState, prevContex) {
    console.log("componentDidUpdate", prevtProp, prevState, prevContex);
  }
  render() {
    return (
      <div className="text-center m-2 p-2">
        <FirstHoc classes="rtl">
          {/* add person */}
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

            {/*end AddPerson  */}
            {/* {this.state.showPerson ? (
            <Person
              person={data}
              deleteperson={this.handleDeletePerson}
              editperson={this.editpersons}
            />
          ) : (
            ""
          )} */}

            <ShowPerson />
          </ExampleContext.Provider>
        </FirstHoc>
      </div>
    );
  }
} //end App
export default secondcomponenthoc(App);
