import React, { useState } from "react";
import { BasicTable } from "../../components/BasicTable";
import { Main, Section } from "../pagesStyles";
import { Button } from "antd";
import { FormDrawer } from "../../components/FormDrawer";

export const List = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <Main>
      <Section>
        <Button onClick={showDrawer} type="primary">
          Nueva Capacitación
        </Button>
        <FormDrawer visible={visible} setLoading={setLoading} onClose={onClose} />
        <BasicTable loading={loading} setLoading={setLoading} tableType="mtt" />
      </Section>
    </Main>
  );
};
