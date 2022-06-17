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
          value: countDispatcher === 0 ? '' : countDispatcher,
        },
        {
          type: "Control",
          value: countControl === 0 ? '' : countControl,
        },
        {
          type: "Telemetría",
          value: countTelemetria === 0 ? '' : countTelemetria,
        },
        {
          type: "Mobicua",
          value: countMobicua === 0 ? '' : countMobicua,
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
          value: countCapacita === 0 ? '' : countCapacita,
        },
        {
          type: "Soporte",
          value: countSoporte === 0 ? '' : countSoporte,
        },
        {
          type: "Seguimiento",
          value: countSeguimiento === 0 ? '' : countSeguimiento,
        },
        {
          type: "Acompañamiento",
          value: countAcompañamiento === 0 ? '' : countAcompañamiento,
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
