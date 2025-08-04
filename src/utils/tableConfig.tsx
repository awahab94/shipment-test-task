import type { ColumnsType } from "antd/es/table";
import { RepackingItem, ShipmentDetailItem } from "@/utils/types";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Typography, Tooltip } from "antd";
import { SortArrow } from "@/components/Icons";

const { Text } = Typography;

export const REPACKING_COLUMNS: ColumnsType<RepackingItem> = [
  {
    title: "",
    key: "index",
    render: (_value, _record, index) => index + 1,
    width: 50
  },
  {
    title: "TRACKING",
    dataIndex: "tracking",
    sorter: (a, b) => a.tracking.localeCompare(b.tracking),
    sortIcon: ({ sortOrder }) => <SortArrow sortOrder={sortOrder} />
  },
  {
    title: "WEIGHT & DIMENSIONS",
    render: (_, record) => (
      <>
        <div>{record.weight}</div>
        <div>{record.dimensions}</div>
      </>
    ),
    sorter: (a, b) => parseFloat(a.weight) - parseFloat(b.weight),
    sortIcon: ({ sortOrder }) => <SortArrow sortOrder={sortOrder} />
  },
  {
    title: "RECEIVED",
    dataIndex: "received",
    sorter: (a, b) => new Date(a.received).getTime() - new Date(b.received).getTime(),
    sortIcon: ({ sortOrder }) => <SortArrow sortOrder={sortOrder} />
  },
  {
    title: "DESCRIPTION",
    dataIndex: "description",
    ellipsis: false,
    render: (text: string) => <div style={{ whiteSpace: "normal", wordBreak: "break-word" }}>{text}</div>
  },
  {
    title: "SELECT REPACK OPTION",
    render: (_, record) => (
      <>
        <Text>{record.repackOption}</Text>{" "}
        <Tooltip title="Repack option explanation">
          <InfoCircleOutlined style={{ color: "#888" }} />
        </Tooltip>
      </>
    )
  },
  {
    title: "FEES",
    dataIndex: "fees"
  }
];

export const SHIPMENT_DETAILS_COLUMNS: ColumnsType<ShipmentDetailItem> = [
  {
    title: "NAME",
    dataIndex: "name"
  },
  {
    title: "QTY",
    dataIndex: "qty",
    sorter: (a, b) => a.qty - b.qty,
    sortIcon: ({ sortOrder }) => <SortArrow sortOrder={sortOrder} />
  },
  {
    title: "WEIGHT & DIMENSIONS",
    render: (_, record) => (
      <>
        <div>{record.weight || "-"}</div>
        <div>{record.dimensions || "-"}</div>
      </>
    ),
    sorter: (a, b) => parseFloat(a.weight || "0") - parseFloat(b.weight || "0"),
    sortIcon: ({ sortOrder }) => <SortArrow sortOrder={sortOrder} />
  },
  {
    title: "VOLUME WEIGHT",
    dataIndex: "volumeWeight",
    sorter: (a, b) => parseFloat(a.volumeWeight ?? "0") - parseFloat(b.volumeWeight ?? "0"),
    sortIcon: ({ sortOrder }) => <SortArrow sortOrder={sortOrder} />
  },
  {
    title: "ASSIGNED PACKAGES",
    render: (_, record) => record.assignedPackages ?? "-",
    sorter: (a, b) => String(a.assignedPackages ?? "").localeCompare(String(b.assignedPackages ?? "")),
    sortIcon: ({ sortOrder }) => <SortArrow sortOrder={sortOrder} />
  },
  {
    title: "CHARGE WEIGHT",
    dataIndex: "chargeWeight"
  },
  {
    title: "RATE",
    dataIndex: "rate"
  },
  {
    title: "COST",
    dataIndex: "cost"
  }
];
