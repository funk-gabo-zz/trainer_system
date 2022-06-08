import React from 'react';
import { Bar } from '@ant-design/plots';
import { tvpconfig } from "./tvpconfig";

export const BasicBar = ({countTelematica, countPresencial, BarType}) => {
    switch (BarType) {
        case "tvp":
          const tpvData = [
            {
              modalidad: 'Telemática',
              value: countTelematica,
            },
            {
              modalidad: 'Presencial',
              value: countPresencial,
            },
          ];
          const tvpconfigOn = {
            ...tvpconfig,
            data: tpvData
          }
          return <Bar {...tvpconfigOn} />;
          break;
        default:
          break;
      }
  };