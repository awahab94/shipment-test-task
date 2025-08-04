import React from "react";
import { Layout } from "antd";
import Sidebar from "@/components/Sidebar/Sidebar";
import Topbar from "@/components/Topbar/Topbar";
import ShipmentContent from "@/content/Shipment";
import { Content } from "antd/es/layout/layout";

const SIDEBAR_WIDTH = 72;

const ShipmentPage = () => {
  return (
    <Layout style={{ maxHeight: "100vh", flexDirection: "row", backgroundColor: "#f3f6f9" }}>
      <Sidebar />
      <Layout style={{ marginLeft: SIDEBAR_WIDTH, transition: "margin-left 0.3s", backgroundColor: "#f3f6f9" }}>
        <Topbar />

        <Content
          style={{
            maxWidth: "1368px",
            margin: "0 auto",
            width: "100%",
            padding: "24px",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            gap: "24px"
          }}
        >
          <ShipmentContent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ShipmentPage;
