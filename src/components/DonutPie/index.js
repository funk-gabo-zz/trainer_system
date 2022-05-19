import React from "react";
import { Pie } from "@ant-design/plots";
import { pvtconfig } from "./pvtconfig";

export const DonutPie = ({ donutType }) => {
  switch (donutType) {
    case "pvt":
      return <Pie {...pvtconfig} />;
      break;

    default:
      break;
  }
};
