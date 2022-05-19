import React from "react";
import { Graphs } from "../../components/Graphs";
import { Pointers } from "../../components/Pointers";
import { Main } from "../pageStyles";

export const Dashboard = () => {
  return (
    <Main>
    <Pointers />
      <Graphs />
    </Main>
  );
};
