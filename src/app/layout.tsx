import "antd/dist/reset.css";
import "./globals.css";
import { ConfigProvider } from "antd";
import AntdRegistry from "@/components/AntdRegistry/AntdRegistry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipment UI",
  description: "Ant Design + Next.js"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AntdRegistry>
          <ConfigProvider theme={{ token: { colorPrimary: "#0257b8" } }}>{children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
