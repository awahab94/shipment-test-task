import React from 'react';
import Image from 'next/image';
import Home from '../Icons/Home/Home';
import User from '../Icons/User/User';
import Document from '../Icons/Document/Document';
import Package from '../Icons/Package/Package';
import Shipments from '../Icons/Shipments/Shipments';
import Warehouse from '../Icons/Warehouse/Warehouse';
import Wallet from '../Icons/Wallet/Wallet';
import Support from '../Icons/Support/Support';
import Login from '../Icons/Login/Login';
import Settings from '../Icons/Settings/Settings';
import Logo from '../Icons/Logo/Logo';

const Sidebar = () => (
  <div
    style={{
      width: 72,
      background: '#0052cc',
      position: 'fixed',
      height: '100vh',
      left: 0,
      top: 0,
      bottom: 0,
      padding: '0px 0px 16px 0',
      zIndex: 1000,
    }}
  >
    <div style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', width: '100%' }}>
      <Logo/>
    </div>

    <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      <Home />
      <User />
      <Document />
      <Package />
      <div style={{ background: '#ff6a00', borderRadius: 0, padding: "18px 24px" }}><Shipments /></div>
      <Warehouse />
      <Shipments />
      <Wallet />
      <Support />
    </div>

    <div style={{ position: 'absolute', bottom: 24, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      <Image width={24} height={24} src="/Frame 77.png" alt='avatar' />
      <Settings />
      <Login />
    </div>
  </div>
);

export default Sidebar;
