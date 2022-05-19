import React from "react";
import { Pie } from "@ant-design/plots";
import { pvtconfig } from "./pvtconfig";
import { stsconfig } from "./stsconfig";

export const DonutPie = ({ donutType }) => {
  switch (donutType) {
    case "pvt":
      return <Pie {...pvtconfig} />;
      break;
    case "sts":
      return <Pie {...stsconfig} />;
      break;

    default:
      break;
  }
};
