import React from "react";
import Button from "react-bootstrap/Button";

const MainButton = props => {
  return (
    <>
      <Button className="primaryBtn btn-block mt-3">{props.children}</Button>
    </>
  );
};

export default MainButton;
