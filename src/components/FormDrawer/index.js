import React from "react";
import { Drawer } from "antd";
import { TrainingForm } from "../TrainingForm";

export const FormDrawer = ({ setLoading, onClose, visible }) => {
  return (
    <Drawer
      title="Nueva Capacitación"
      placement="left"
      closable={false}
      onClose={onClose}
      visible={visible}
      key="left"
    >
      <TrainingForm setLoading={setLoading} />
    </Drawer>
  );
};
