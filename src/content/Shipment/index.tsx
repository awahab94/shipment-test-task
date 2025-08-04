"use client";
import { Steps, Row, Col } from "antd";
import CustomerInfo from "@/components/CustomerInfo/CustomerInfo";
import SummaryFooter from "@/components/SummaryFooter/SummaryFooter";
import Checked from "@/components/Icons/Checked/Checked";
import CustomTable from "@/components/CustomTable/CustomTable";
import { REPACKING_COLUMNS, SHIPMENT_DETAILS_COLUMNS } from "@/utils/tableConfig";
import { CONSIGNEE_FIELDS, REPACKING_DATA, SHIPMENT_DETAILS_DATA, SHIPPING_FIELDS } from "@/utils/constants";
import InfoCard from "@/components/InfoCard/InfoCard";
import Title from "antd/es/typography/Title";

const ShipmentContent = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Steps
          current={4}
          items={[
            { title: "Create Shipment", icon: <Checked /> },
            { title: "Repacking & Consolidation", icon: <Checked /> },
            { title: "Shipment Details", icon: <Checked /> },
            { title: "Shipping Method", icon: <Checked /> },
            { title: "Summary & Confirmation" }
          ]}
        />

        <div className="scroll-hidden" style={{ display: "flex", flexDirection: "column", gap: 24, overflowY: "scroll", height: "calc(100vh - 395px)" }}>
          <CustomerInfo />

          <Title level={4} style={{ margin: 0 }}>
            Shipping Method
          </Title>

          <Row style={{ width: "100%", display: "flex", gap: "24px" }}>
            <Col flex="1 1 0" style={{ minWidth: 0, padding: 0 }}>
              <InfoCard title="Consignee Details" fields={CONSIGNEE_FIELDS} showInColumns />
            </Col>
            <Col flex="1 1 0" style={{ minWidth: 0, padding: 0 }}>
              <InfoCard title="Shipping Details" fields={SHIPPING_FIELDS} />
            </Col>
          </Row>
          <Title level={4} style={{ margin: 0 }}>
            Repacking & Consolidation
          </Title>
          <CustomTable columns={REPACKING_COLUMNS} data={REPACKING_DATA} />
          <Title level={4} style={{ margin: 0 }}>
            Shipment Details
          </Title>
          <CustomTable columns={SHIPMENT_DETAILS_COLUMNS} data={SHIPMENT_DETAILS_DATA} />
        </div>
      </div>
      <SummaryFooter />
    </>
  );
};

export default ShipmentContent;
