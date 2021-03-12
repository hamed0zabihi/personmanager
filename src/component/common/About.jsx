import React from "react";
import { NavLink } from "react-router-dom";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const About = (props) => {
  return (
    <div
      className="mt-4 pt-4 col-4 text-center mx-auto"
      md={{ size: 4, offset: 4 }}
    >
      <Card body inverse color="danger">
        <CardTitle tag="h5">person manager</CardTitle>
        <CardText>hamed zabihi</CardText>
        <Button color="dark">
          <NavLink to="/" className="nav-link" exact style={{ color: "white" }}>
            Add Person
          </NavLink>
        </Button>
      </Card>
    </div>
  );
};
export default About;
