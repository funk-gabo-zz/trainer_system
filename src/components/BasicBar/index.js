import React from 'react';
import { Bar } from '@ant-design/plots';
import { tvpconfig } from "./tvpconfig";

export const BasicBar = ({BarType}) => {
    switch (BarType) {
        case "tvp":
          return <Bar {...tvpconfig} />;
          break;
        default:
          break;
      }
  };