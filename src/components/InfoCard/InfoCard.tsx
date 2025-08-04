"use client";

import React, { useState } from "react";
import { Card, Typography, Row, Col, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const { Text } = Typography;

type Field = {
  label: string;
  value: React.ReactNode;
};

type Props = {
  title: string;
  fields: Field[];
  showInColumns?: boolean;
};

const InfoCard: React.FC<Props> = ({ title, fields, showInColumns = false }) => {
  const [expanded, setExpanded] = useState(true);
  const toggleCollapse = () => setExpanded((prev) => !prev);

  const topFields = showInColumns ? fields.slice(0, fields.length - 3) : fields;
  const bottomFields = showInColumns ? fields.slice(-3) : [];
  const colSpan = 8;

  return (
    <Card
      title={title}
      extra={
        <Button
          type="text"
          size="small"
          icon={expanded ? <UpOutlined /> : <DownOutlined />}
          onClick={toggleCollapse}
          style={{
            background: "transparent",
            boxShadow: "none",
            color: "#000",
            padding: 0
          }}
        />
      }
      variant="borderless"
      style={{ borderRadius: 12, minHeight: expanded ? 492 : undefined }}
      styles={{
        header: { borderBottom: "none" },
        body: { padding: 0 }
      }}
    >
      {expanded && (
        <>
          {topFields.map((field, index) => (
            <div
              key={field.label}
              style={{
                padding: "12px 24px",
                borderBottom: index !== topFields.length - 1 || bottomFields.length > 0 ? "1px solid #eee" : undefined
              }}
            >
              <Text strong style={{ display: "block", marginBottom: 4 }}>
                {field.label}
              </Text>
              <Text>{field.value}</Text>
            </div>
          ))}

          {bottomFields.length > 0 && (
            <div style={{ padding: "12px 24px" }}>
              <Row gutter={16}>
                {bottomFields.map((field) => (
                  <Col key={field.label} span={colSpan}>
                    <div>
                      <Text strong style={{ display: "block", marginBottom: 4 }}>
                        {field.label}
                      </Text>
                      <Text>{field.value}</Text>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </>
      )}
    </Card>
  );
};

export default InfoCard;
