import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiXampp,
  SiIntellijidea,
  SiPycharm,
  SiNodered,
  SiGithub
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiNodered/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub/>
      </Col>

    </Row>
  );
}

export default Toolstack;
