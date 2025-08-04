import { ReactNode } from "react";

export type RepackingItem = {
  key: string;
  tracking: string;
  weight: string;
  dimensions: string;
  received: string;
  description: string;
  repackOption: string;
  fees: string;
};

export type ShipmentDetailItem = {
  key: string;
  name: string;
  qty: number;
  weight?: string;
  dimensions?: string;
  volumeWeight?: string;
  assignedPackages?: number;
  chargeWeight?: string;
  rate: string;
  cost: string;
};

export type InfoField = { label: string; value: ReactNode };
