"use client";

import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

type Props<T> = {
  data: T[];
  columns: ColumnsType<T>;
};

const CustomTable = <T extends object>({ data, columns }: Props<T>) => {
  const tableComponents = {
    header: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cell: (props: any) => (
        <th
          {...props}
          style={{
            ...props.style,
            whiteSpace: "nowrap",
            background: "#0057B8",
            color: "#fff",
            fontWeight: 600
          }}
        />
      )
    }
  };
  return <Table columns={columns} dataSource={data} pagination={false} bordered rowKey="key" components={tableComponents} />;
};

export default CustomTable;
