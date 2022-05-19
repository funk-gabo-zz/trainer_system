import React from "react";
import { DonutPie } from "../DonutPie";
import { BasicBar } from "../BasicBar";
import { GraphItem, Main } from "./styles";

export const Dashboard = () => {
  return (
    <Main>
      <GraphItem>
        <DonutPie donutType="pvt" />
      </GraphItem>
      <GraphItem>
        <DonutPie donutType="sts" />
      </GraphItem>
      <GraphItem>
        <BasicBar BarType="tvp" />
      </GraphItem>
    </Main>
  );
};
