import "./globals.css";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipment UI",
  description: "Ant Design + Next.js"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ConfigProvider theme={{ token: { colorPrimary: "#0257b8" } }}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
