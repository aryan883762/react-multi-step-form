import React from "react";
import { Row, Col } from "reactstrap";
export const Duration = (props) => {
  return (
    <>
   <div className="arrow_box">
    <Row>
    <Col xs="12" className="p-0">
        <h3 className="ml-4">Daily</h3>
        <hr></hr>
    </Col>
    </Row>
    <div className="p-2" style={{paddingTop:'0px'}}>
    <Row>
        <Col xs="6" >
        <span>Water:</span>
        </Col>
        <Col xs="6">
        <span>1L</span>
        </Col>
    </Row>
    <Row>
        <Col xs="6">
            <span>Honey:</span>
        </Col>
        <Col xs="6">
        <span>300ml</span>
        </Col>
    </Row>
    <Row>
        <Col xs="6">
        <span>Total:</span>
        </Col>
        <Col xs="6">
        <span>1.2L</span>
        </Col>
    </Row>
    </div>
</div>
    </>
  );
};
