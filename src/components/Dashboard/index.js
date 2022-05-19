import React from "react";
import { DonutPie } from "../DonutPie";
import { Main } from "./styles";

export const Dashboard = () => {
  return (
    <Main>
      <div>
        <DonutPie donutType="pvt" />
      </div>
    </Main>
  );
};
