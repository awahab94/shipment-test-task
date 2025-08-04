

import React from 'react';
import { Row, Col } from 'antd';
import { UserOutlined, ShopOutlined, AppstoreOutlined } from '@ant-design/icons';

const cardStyle: React.CSSProperties = {
  background: '#fff',
  borderRadius: 12,
  padding: '16px 24px',
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  border: '1px solid #e0e0e0',
};

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  color: '#888',
};

const valueStyle: React.CSSProperties = {
  fontWeight: 600,
  fontSize: 16,
};

const CustomerInfo = () => (
  <Row gutter={16} style={{ marginBottom: 24 }}>
    <Col span={8}>
      <div style={cardStyle}>
        <UserOutlined style={{ fontSize: 20, color: '#1677ff' }} />
        <div>
          <div style={labelStyle}>Customer name</div>
          <div style={valueStyle}>Adedamola Olarele</div>
        </div>
      </div>
    </Col>
    <Col span={8}>
      <div style={cardStyle}>
        <ShopOutlined style={{ fontSize: 20, color: '#1677ff' }} />
        <div>
          <div style={labelStyle}>Business name</div>
          <div style={valueStyle}>Dolf Technologies</div>
        </div>
      </div>
    </Col>
    <Col span={8}>
      <div style={cardStyle}>
        <AppstoreOutlined style={{ fontSize: 20, color: '#1677ff' }} />
        <div>
          <div style={labelStyle}>Unit no.</div>
          <div style={valueStyle}>1E</div>
        </div>
      </div>
    </Col>
  </Row>
);

export default CustomerInfo;