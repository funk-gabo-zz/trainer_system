import React from "react";
import { DonutPie } from "../DonutPie";
import { BasicBar } from "../BasicBar";
import { GraphItem } from "./styles";
import { GraphsContainer } from "./styles";

export const Graphs = () => {
  return (
    <GraphsContainer>
      <GraphItem>
        <DonutPie donutType="pvt" />
      </GraphItem>
      <GraphItem>
        <DonutPie donutType="sts" />
      </GraphItem>
      <GraphItem>
        <BasicBar BarType="tvp" />
      </GraphItem>
    </GraphsContainer>
  );
};
