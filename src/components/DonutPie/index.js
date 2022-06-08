import React from "react";
import { Pie } from "@ant-design/plots";
import { pvtconfig } from "./pvtconfig";
import { stsconfig } from "./stsconfig";

export const DonutPie = ({
  countCapacita,
  countMobicua,
  countTelemetria,
  countControl,
  countDispatcher,
  donutType,
  countSoporte,
  countSeguimiento,
  countAcompañamiento,
}) => {
  switch (donutType) {
    case "pvt":
      const pvtData = [
        {
          type: "Dispatcher",
          value: countDispatcher,
        },
        {
          type: "Control",
          value: countControl,
        },
        {
          type: "Telemetría",
          value: countTelemetria,
        },
        {
          type: "Mobicua",
          value: countMobicua,
        },
      ];
      const pvtconfigOn = {
        ...pvtconfig,
        data: pvtData,
      };
      return <Pie {...pvtconfigOn} />;
    case "sts":
      const stsData = [
        {
          type: "Capacitaciones",
          value: countCapacita,
        },
        {
          type: "Soporte",
          value: countSoporte,
        },
        {
          type: "Seguimiento",
          value: countSeguimiento,
        },
        {
          type: "Acompañamiento",
          value: countAcompañamiento,
        },
      ];
      const stsconfigOn = {
        ...stsconfig,
        data: stsData,
      };
      return <Pie {...stsconfigOn} />;
    default:
      break;
  }
};
