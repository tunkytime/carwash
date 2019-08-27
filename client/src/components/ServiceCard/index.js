import React from "react";
import Card from "react-bootstrap/Card";

const ServiceCard = props => {
  return (
    <Card>
      <Card.Body className="keyword">{props.children}</Card.Body>
    </Card>
  );
};

export default ServiceCard;
