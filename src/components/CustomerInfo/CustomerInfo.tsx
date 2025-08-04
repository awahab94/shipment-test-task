"use client";
import React from "react";
import { Typography } from "antd";
import { BuildingIcon, FilledProfileIcon, UnitNumberIcon } from "../Icons";

const { Text, Title } = Typography;

const boxStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  borderRadius: 8,
  padding: "24px",
  display: "flex",
  alignItems: "center",
  gap: 32,
  width: "100%"
};

const dividerStyle: React.CSSProperties = {
  width: 1,
  height: 48,
  backgroundColor: "#E5E5E5"
};

const iconWrapperStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid #0057B8",
  borderRadius: "50%",
  padding: 10,
  width: 40,
  height: 40
};

const CustomerInfo: React.FC = () => (
  <div style={boxStyle}>
    <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
      <div style={iconWrapperStyle}>
        <FilledProfileIcon />
      </div>
      <div style={{ marginLeft: 16 }}>
        <Text>Customer name</Text>
        <Title level={4} style={{ margin: 0 }}>
          Adedamola Olarele
        </Title>
      </div>
    </div>

    <div style={dividerStyle} />

    <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
      <div style={iconWrapperStyle}>
        <BuildingIcon />
      </div>
      <div style={{ marginLeft: 16 }}>
        <Text>Business name</Text>
        <Title level={4} style={{ margin: 0 }}>
          Dolf Technologies
        </Title>
      </div>
    </div>

    <div style={dividerStyle} />

    <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
      <div style={iconWrapperStyle}>
        <UnitNumberIcon />
      </div>
      <div style={{ marginLeft: 16 }}>
        <Text>Unit no.</Text>
        <Title level={4} style={{ margin: 0 }}>
          1E
        </Title>
      </div>
    </div>
  </div>
);

export default CustomerInfo;
