import React from "react";
import { Table } from "antd";
import { uftcolumns, uftdata } from "./uftconfig";
import { mttcolumns, mttdata } from "./mttconfig";

export const BasicTable = ({ searchValue, tableType }) => {
  switch (tableType) {
    case "uft":
      const uftdataFiltler = uftdata.filter((data) => {
        const nameDataUpper = data.nombre.toUpperCase();
        const searchValueUpper = searchValue.toUpperCase();
        return nameDataUpper.includes(searchValueUpper);
      });
      return (
        <Table columns={uftcolumns} dataSource={uftdataFiltler} size="small" />
      );
    case "mtt":
      return <Table columns={mttcolumns} dataSource={mttdata} size="small" />;
    default:
      break;
  }
};
