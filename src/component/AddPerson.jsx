import React from "react";
import ExampleContex from "../context/ExampleContext";
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  Col,
  Badge,
} from "reactstrap";
import { ToastContainer } from "react-toastify";

const AddPersons = () => {
  return (
    <ExampleContex.Consumer>
      {(context) => {
        const { data } = context.state;
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
          <div>
            <Col className="md-3 mt-auto " md={{ size: 4, offset: 4 }}>
              <InputGroup className="md-3">
                <Input
                  value={context.state.valueInput}
                  onChange={context.handleInput}
                  placeholder="add new person"
                />
                <InputGroupAddon addonType="append">
                  <Button onClick={context.addPerson} color="success">
                    <i className="fas fa-user-plus"></i>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
              <ToastContainer />
            </Col>

            <Button
              className="m-4"
              onClick={context.handleshowPerson}
              color={context.state.showPerson ? "info" : "danger"}
            >
              show Person
              <Badge color={`${colorBadge.join(" ")}`}>
                {context.state.data.length}
              </Badge>
            </Button>
          </div>
        );
      }}
    </ExampleContex.Consumer>
  );
};
export default AddPersons;
