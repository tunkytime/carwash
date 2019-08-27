import React from "react";
import MainNavbar from "./components/MainNavbar";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";
import "./App.scss";

function App() {
  return (
    <>
      <MainNavbar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
