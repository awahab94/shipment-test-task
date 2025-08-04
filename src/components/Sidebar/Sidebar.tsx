"use client";
import React from "react";
import Image from "next/image";
import {
  HomeIcon,
  UserIcon,
  DocumentIcon,
  PackageIcon,
  ShipmentsIcon,
  WarehouseIcon,
  WalletIcon,
  SupportIcon,
  SettingsIcon,
  LoginIcon,
  LogoIcon,
  DeliveryIcon
} from "@/components/Icons";

const Sidebar: React.FC = () => {
  return (
    <div
      style={{
        width: 72,
        height: "100vh",
        background: "#0052cc",
        position: "fixed",
        top: 0,
        left: 0,
        paddingBottom: 16,
        zIndex: 1000,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          height: 80,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: 'pointer'
        }}
      >
        <LogoIcon />
      </div>

      <div
        style={{
          marginTop: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          flex: 1
        }}
      >
        <div style={{ cursor: "pointer" }}>
          <HomeIcon />
        </div>
        <div style={{ cursor: "pointer" }}>
          <UserIcon />
        </div>
        <div style={{ cursor: "pointer" }}>
          <DocumentIcon />
        </div>
        <div style={{ cursor: "pointer" }}>
          <PackageIcon />
        </div>
        <div style={{ background: "#ff6a00", cursor: "pointer", padding: 24 }}>
          <DeliveryIcon stroke="#fff"/>
        </div>
        <div style={{ cursor: "pointer" }}>
          <WarehouseIcon />
        </div>
        <div style={{ cursor: "pointer" }}>
          <WalletIcon />
        </div>
        <div style={{ cursor: "pointer" }}>
          <SupportIcon />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24
        }}
      >
        <div style={{ cursor: "pointer" }}>
          <Image width={24} height={24} src="/Frame 77.png" alt="User avatar" />
        </div>
        <div style={{ cursor: "pointer" }}>
          <SettingsIcon />
        </div>
        <div style={{ cursor: "pointer" }}>
          <LoginIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
