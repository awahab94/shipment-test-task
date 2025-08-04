"use client";
import React from "react";
import { Layout, Typography, Space, Badge, Avatar } from "antd";
import { CarOutlined } from "@ant-design/icons";
import Hamburger from "../Icons/Hamburger/Hamburger";
import BellIcon from "../Icons/BellIcon/BellIcon";

const { Header } = Layout;
const { Text } = Typography;

const Topbar = () => {
  return (
    <Header style={{ background: "#f0f3f6", padding: "0 120px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Space>
        <CarOutlined style={{ fontSize: 16 }} />
        <Text strong style={{ fontSize: 16 }}>
          Shipments
        </Text>
        <Text style={{ color: "#666" }}>/ Create New</Text>
      </Space>
      <Space size="middle">
        <Avatar shape="circle" icon={<BellIcon />} style={{ backgroundColor: "transparent", border: "1px solid #E5E5E5" }} />
        <Avatar shape="circle" icon={<Hamburger />} style={{ backgroundColor: "transparent", border: "1px solid #E5E5E5" }} />
      </Space>
    </Header>
  );
};

export default Topbar;
