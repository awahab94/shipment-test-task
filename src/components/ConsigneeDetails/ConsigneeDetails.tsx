"use client";
import React from "react";
import { Row, Col } from "antd";
import Card from "antd/es/card/Card";

const ConsigneeDetails = () => (
  <Card title="Consignee Details" variant={"borderless"} style={{ borderRadius: 12 }}>
    <p>
      <strong>Full Name</strong>
      <br />
      John Carter
    </p>
    <p>
      <strong>Email Address</strong>
      <br />
      john@wakabuy.com
    </p>
    <p>
      <strong>Phone Number</strong>
      <br />
      +1 01539 702257
    </p>
    <p>
      <strong>Address Line 1</strong>
      <br />
      20 Cooper Square
    </p>
    <p>
      <strong>Country</strong>
      <br />
      USA
    </p>
    <Row gutter={8}>
      <Col span={8}>
        <p>
          <strong>State</strong>
          <br />
          Florida
        </p>
      </Col>
      <Col span={8}>
        <p>
          <strong>City</strong>
          <br />
          Sebring
        </p>
      </Col>
      <Col span={8}>
        <p>
          <strong>Zip</strong>
          <br />
          33875
        </p>
      </Col>
    </Row>
  </Card>
);

export default ConsigneeDetails;
