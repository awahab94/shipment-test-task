import React from "react";
import { Layout, Steps, Row, Col } from "antd";
import Sidebar from "@/components/Sidebar/Sidebar";
import CustomerInfo from "@/components/CustomerInfo/CustomerInfo";
import ConsigneeDetails from "@/components/ConsigneeDetails/ConsigneeDetails";
import ShippingDetails from "@/components/ShippingDetails/ShippingDetails";
import SummaryFooter from "@/components/SummaryFooter/SummaryFooter";
import Topbar from "@/components/Topbar/Topbar";
import Checked from "@/components/Icons/Checked/Checked";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

const ShipmentPage = () => {
  return (
    <Layout style={{ maxHeight: "100vh", overflow: "hidden" }}>
      <Sidebar />
      <Layout>
        <Topbar />
        <Layout style={{ background: "#f5f7fa" }}>
          <Content style={{ maxWidth: "1400px", margin: "0 auto", paddingBottom: 160, paddingTop: 24, paddingInline: 24, overflowY: "auto", height: "100vh" }}>
            <Steps
              current={4}
              items={[
                { title: "Create Shipment", icon: <Checked /> },
                { title: "Repacking & Consolidation", icon: <Checked /> },
                { title: "Shipment Details", icon: <Checked /> },
                { title: "Shipping Method", icon: <Checked /> },
                { title: "Summary & Confirmation" }
              ]}
              style={{ marginBottom: 32 }}
            />

            <CustomerInfo />

            <Title level={4} style={{ marginBottom: 16 }}>
              Shipping Method
            </Title>

            <Row gutter={24} style={{ marginBottom: 32 }}>
              <Col span={12}>
                <ConsigneeDetails />
              </Col>
              <Col span={12}>
                <ShippingDetails />
              </Col>
            </Row>
          </Content>

          <div style={{ position: "fixed", bottom: 0, left: 80, right: 0, background: "#f5f7fa", padding: 24, boxShadow: "0 -2px 8px rgba(0,0,0,0.05)", zIndex: 999 }}>
            <div>
              <SummaryFooter />
            </div>
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ShipmentPage;
