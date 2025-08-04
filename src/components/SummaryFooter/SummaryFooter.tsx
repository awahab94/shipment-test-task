import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

const boxStyle: React.CSSProperties = {
  background: '#dbeeff',
  border: '1px solid #1677ff',
  borderRadius: 8,
  padding: '16px 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const SummaryFooter = () => (
  <>
    <Row justify="space-between" align="top" gutter={24} style={{ marginBottom: 24 }}>
      <Col span={10}>
        <div style={{
          border: '1px solid #d9d9d9',
          borderRadius: 8,
          padding: '16px 24px',
          background: '#fff',
          minHeight: 120,
        }}>
          <Text type="secondary">Add Details</Text>
        </div>
      </Col>

      <Col span={14}>
        <div style={boxStyle}>
          <div>
            <Text>Total Cost</Text>
            <Title level={4}>$100.00</Title>
          </div>
          <div style={{width:"1px",height:"58px",background:"#0057B880"}}/>
          <div>
            <Text>Repacking/Consolidation</Text>
            <Title level={4}>$10.00</Title>
          </div>
          <div style={{width:"1px",height:"58px",background:"#0057B880"}}/>
          <div>
            <Text>Total Shipping Cost</Text>
            <Title level={4} style={{ color: '#1677ff' }}>$510.00</Title>
          </div>
        </div>
      </Col>
    </Row>

    <Row justify="end" gutter={16}>
      <Col>
        <Button icon={<LeftOutlined />} style={{ background: '#ffefe6', borderRadius: 24, border: 'none', padding:"18px 21px",height:"52px"  }}>
          Back
        </Button>
      </Col>
      <Col>
        <Button style={{ background: '#0052cc', color: '#fff', borderRadius: 24, border: 'none', padding:"18px 21px",height:"52px"  }}>
          Save for Later
        </Button>
      </Col>
      <Col> 
        <Button type="default" style={{ borderRadius: 24,padding:"18px 21px",height:"52px" }}>
          Create Shipment
        </Button>
      </Col>
    </Row>
  </>
);

export default SummaryFooter;