import React, { useState } from "react";
import { BasicTable } from "../../components/BasicTable";
import { Main, Section } from "../pagesStyles";
import { Button } from 'antd';
import { FormModal } from "../../components/FormModal";

export const List = () => {
  return (
    <Main>
      <Section>
        <FormModal modalType='ntf' />
        <BasicTable tableType="mtt" />
      </Section>
    </Main>
  );
};
