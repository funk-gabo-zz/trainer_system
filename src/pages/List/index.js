import React, { useState } from "react";
import { BasicTable } from "../../components/BasicTable";
import { Main, Section } from "../pagesStyles";
import { Button } from "antd";
import { FormModal } from "../../components/FormModal";
import { FormDrawer } from "../../components/FormDrawer";

export const List = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <Main>
      <Section>
      <Button onClick={showDrawer} type="primary">Nueva Capacitación</Button>
      <FormDrawer visible={visible} onClose={onClose} />
      <BasicTable tableType="mtt" />
      </Section>
    </Main>
  );
};
