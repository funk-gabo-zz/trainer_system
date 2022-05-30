import React from "react";
import { BasicTable } from "../../components/BasicTable";
import { Main, Section } from "../pagesStyles";

export const List = () => {
  return (
    <Main>
      <Section>
        <BasicTable tableType="mtt" />
      </Section>
    </Main>
  );
};
