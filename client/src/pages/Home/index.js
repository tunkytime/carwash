import React from "react";
import ServiceCard from "../../components/ServiceCard";
import MainButton from "../../components/MainButton";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo from "./images/logo.png";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="text-center">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <Row className="text-center">
        <Col sm={12} lg={4}>
          <h3>Quick</h3>
          <ServiceCard>One hour or less</ServiceCard>
        </Col>
        <Col sm={12} lg={4}>
          <h3>Affordable</h3>
          <ServiceCard>Pay a fraction of the cost</ServiceCard>
        </Col>
        <Col sm={12} lg={4}>
          <h3>Convenient</h3>
          <ServiceCard>We'll come to you</ServiceCard>
        </Col>
      </Row>
      <Row className="text-center">
        <Col sm={12} lg={8} className="mx-auto mt-3 appointment">
          <h4>Schedule an Appointment</h4>
        </Col>
      </Row>
    </>
  );
};

export default Home;
