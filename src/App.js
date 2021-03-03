import React from "react";
import Person from "./component/person";
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  Col,
  Badge,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

class App extends React.Component {
  state = {
    data: [
      // {id:0,name:"hamed zabihi"},
      // {id:1,name:"mohammad garmabi"},
      // {id:2,name:"ahmad rezaei"}
    ],
    valueInput: "",
    showPerson: false,
  }; //end state

  handlePerson = (id) => {
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
    this.setState({ showPerson: !this.state.showPerson });
  };
  render() {
    const { data } = this.state;
    let colorBadge = [];
    if (data.length <= 1) {
      colorBadge.push("light");
    }
    if (data.length <= 3) {
      colorBadge.push("warning");
    }
    if (data.length >= 4) {
      colorBadge.push("success");
    }

    return (
      <div className="text-center m-2 p-2">
        <Col className="md-3 mt-auto " md={{ size: 4, offset: 4 }}>
          <InputGroup className="md-3">
            <Input
              value={this.state.valueInput}
              onChange={this.handleInput}
              placeholder="add new person"
            />
            <InputGroupAddon addonType="append">
              <Button onClick={this.addPerson} color="success">
                <i className="fas fa-user-plus"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <ToastContainer />
          {/* Same as */}
        </Col>

        <Button
          className="m-4"
          onClick={this.handleshowPerson}
          color={this.state.showPerson ? "info" : "danger"}
        >
          show Person
          <Badge color={`${colorBadge.join(" ")}`}>
            {this.state.data.length}
          </Badge>
        </Button>
        {this.state.showPerson ? (
          <Person
            person={data}
            deleteperson={this.handlePerson}
            editperson={this.editpersons}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
} //end App
export default App;
