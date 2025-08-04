import React from 'react';
import { Card } from 'antd';

const ShippingDetails = () => (
  <Card title="Shipping Details" bordered={false} style={{ borderRadius: 12 }}>
    <p><strong>Method Name</strong><br />Air Freight</p>
    <p><strong>Shipping Date</strong><br />JUL-25-2025</p>
    <p><strong>Carrier</strong><br /><span style={{ color: '#1677ff' }}>Waka</span><span style={{ color: '#fa8c16' }}>Cargo</span> Standard</p>
    <p><strong>ETA</strong><br />JUL-03-2025</p>
    <p><strong>Price</strong><br />$20.00</p>
  </Card>
);

export default ShippingDetails;