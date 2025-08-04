"use client";

import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const { Text, Title } = Typography;

const cardStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  border: "1px solid #d9d9d9",
  borderRadius: 8,
  padding: "16px",
  minHeight: 108
};

const costBoxStyle: React.CSSProperties = {
  backgroundColor: "#dbeeff",
  border: "1px solid #1677ff",
  borderRadius: 8,
  padding: "24px 36px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const dividerStyle: React.CSSProperties = {
  width: 1,
  height: 58,
  backgroundColor: "#0057B880"
};

const SummaryFooter: React.FC = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
    <Row justify="space-between" align="top" gutter={24}>
      <Col span={10}>
        <div style={cardStyle}>
          <TextArea
            placeholder="Add Details"
            rows={4}
            variant='borderless'
            style={{
              resize: "none",
              fontSize: 14,
              color: "#000",
              backgroundColor: "transparent",
              outline: "none",
              boxShadow: "none",
              height: '60px'
            }}
          />
        </div>
      </Col>

      <Col span={14}>
        <div style={costBoxStyle}>
          <div>
            <Text>Total Cost</Text>
            <Title level={4} style={{ margin: 0 }}>
              $100.00
            </Title>
          </div>
          <div style={dividerStyle} />
          <div>
            <Text>Repacking/Consolidation</Text>
            <Title level={4} style={{ margin: 0 }}>
              $10.00
            </Title>
          </div>
          <div style={dividerStyle} />
          <div>
            <Text>Total Shipping Cost</Text>
            <Title level={4} style={{ color: "#1677ff", margin: 0 }}>
              $510.00
            </Title>
          </div>
        </div>
      </Col>
    </Row>

    <Row justify="end" gutter={16}>
      <Col>
        <Button
          icon={<LeftOutlined />}
          style={{
            backgroundColor: "#ffefe6",
            borderRadius: 24,
            border: "none",
            padding: "0 21px",
            height: 52
          }}
        >
          Back
        </Button>
      </Col>

      <Col>
        <Button
          style={{
            backgroundColor: "#0052cc",
            color: "#fff",
            borderRadius: 24,
            border: "none",
            padding: "0 21px",
            height: 52
          }}
        >
          Save for Later
        </Button>
      </Col>

      <Col>
        <Button
          type="primary"
          style={{
            borderRadius: 24,
            padding: "0 21px",
            height: 52
          }}
        >
          Create Shipment
        </Button>
      </Col>
    </Row>
  </div>
);

export default SummaryFooter;
