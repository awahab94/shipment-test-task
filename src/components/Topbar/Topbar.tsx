"use client";

import React from "react";
import { Layout, Typography, Space, Avatar } from "antd";
import Hamburger from "../Icons/Hamburger/Hamburger";
import BellIcon from "../Icons/BellIcon/BellIcon";
import { DeliveryIcon } from "../Icons";

const { Header } = Layout;
const { Text } = Typography;

const Topbar: React.FC = () => {
  return (
    <Header
      style={{
        background: "#f3f6f9",
        padding: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #e5e5e5",
        height: 80
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <DeliveryIcon />
        <Text strong style={{ fontSize: 16, color: "#212529" }}>
          Shipments
        </Text>
        <Text style={{ fontSize: 16, color: "#212529" }}>/ Create New</Text>
      </div>

      <Space size="middle" align="center">
        <Avatar
          icon={<BellIcon />}
          style={{
            backgroundColor: "transparent",
            border: "1px solid #E5E5E5",
            cursor: "pointer"
          }}
        />
        <Avatar
          icon={<Hamburger />}
          style={{
            backgroundColor: "transparent",
            border: "1px solid #E5E5E5",
            cursor: "pointer"
          }}
        />
      </Space>
    </Header>
  );
};

export default Topbar;
