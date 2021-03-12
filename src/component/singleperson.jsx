import React from "react";
import {
  Col,
  InputGroup,
  Input,
  Button,
  InputGroupAddon,
  Card,
  CardTitle,
} from "reactstrap";

const SinglePerson = ({ name, deleted, edited }) => {
  return (
    <div
      className="m-2 p-4 col-4 text-center mx-auto"
      md={{ size: 4, offset: 4 }}
    >
      <Card
        body
        className="text-center   p-4 text-white justify-content-center"
        md={{ size: 4, offset: 4 }}
        color="info"
      >
        <CardTitle tag="h5">{name}</CardTitle>

        <Col>
          <InputGroup>
            <Input placeholder={name} onChange={edited} />
            <InputGroupAddon addonType="append">
              <Button onClick={deleted} color="danger">
                <i className="fas fa-user-minus"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Card>
    </div>
  );
};
export default SinglePerson;
