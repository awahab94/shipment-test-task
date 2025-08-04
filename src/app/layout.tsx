import "antd/dist/reset.css"; // Add this at the top
import "./globals.css";
import { ConfigProvider } from "antd";

export const metadata = {
  title: "Shipment UI",
  description: "Ant Design + Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <ConfigProvider theme={{ token: { colorPrimary: "#0257b8" } }}>
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
