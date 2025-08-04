import { WakaCargoIcon } from "@/components/Icons";
import { InfoField, RepackingItem, ShipmentDetailItem } from "./types";

export const REPACKING_DATA: RepackingItem[] = [
  {
    key: "1",
    tracking: "xxxxxxxxxxx 310326",
    weight: "90.90",
    dimensions: "20 x 20 x 20",
    received: "JUL-07-2025",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    repackOption: "Do not repack",
    fees: "$0.00"
  },
  {
    key: "2",
    tracking: "xxxxxxxxxxx 310326",
    weight: "90.90",
    dimensions: "20 x 20 x 20",
    received: "JUL-07-2025",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    repackOption: "Remove outer box only",
    fees: "$1.00"
  },
  {
    key: "3",
    tracking: "xxxxxxxxxxx 310326",
    weight: "90.90",
    dimensions: "20 x 20 x 20",
    received: "JUL-07-2025",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    repackOption: "Full Repack",
    fees: "$4.00"
  }
];

export const SHIPMENT_DETAILS_DATA: ShipmentDetailItem[] = [
  {
    key: "1",
    name: "iPhone 14",
    qty: 1,
    rate: "$10.00",
    cost: "$10.00",
    chargeWeight: "Flat"
  },
  {
    key: "2",
    name: "MacBook Pro",
    qty: 1,
    rate: "$50.00",
    cost: "$50.00",
    chargeWeight: "Flat"
  },
  {
    key: "3",
    name: "Box 1",
    qty: 1,
    weight: "52.00",
    dimensions: "25 x 30 x 54",
    volumeWeight: "291.37",
    assignedPackages: 3,
    chargeWeight: "Actual Weight",
    rate: "$5.00",
    cost: "$50.00"
  },
  {
    key: "4",
    name: "Box 2",
    qty: 1,
    weight: "52.00",
    dimensions: "25 x 30 x 54",
    volumeWeight: "291.37",
    assignedPackages: 3,
    chargeWeight: "Volume Weight",
    rate: "$5.00",
    cost: "$100.00"
  }
];

export const CONSIGNEE_FIELDS: InfoField[] = [
  { label: "Full Name", value: "John Carter" },
  { label: "Email Address", value: "john@wakabuy.com" },
  { label: "Phone Number", value: "+1 01539 702257" },
  { label: "Address Line 1", value: "20 Cooper Square" },
  { label: "Country", value: "USA" },
  { label: "State", value: "Florida" },
  { label: "City", value: "Sebring" },
  { label: "Zip", value: "33875" }
];

export const SHIPPING_FIELDS: InfoField[] = [
  { label: "Method Name", value: "Air Freight" },
  { label: "Shipping Date", value: "JUL-25-2025" },
  {
    label: "Carrier",
    value: (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <WakaCargoIcon />
        <span>Standard</span>
      </div>
    )
  },
  { label: "ETA", value: "JUL-03-2025" },
  { label: "Price", value: "$20.00" }
];
