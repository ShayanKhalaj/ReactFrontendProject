import React from "react";
import PannelNavbar from "./PannelNavbar";
import PannelSidebar from "./PannelSidebar";
import { Col, Container, Row } from "react-bootstrap";

function ThemeWrapper({ children }) {
  return (
    <>
      <PannelNavbar />
      <Container fluid>
        <Row>
          <Col md={2}>
            <PannelSidebar />
          </Col>
          <Col md={10}>{children}</Col>
        </Row>
      </Container>
    </>
  );
}

export default ThemeWrapper;
