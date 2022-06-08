import React from "react";
import { Drawer } from "antd";
import { TrainingForm } from "../TrainingForm";
import { UserForm } from "../UserForm";

export const FormDrawer = ({ drawerTitle, drawerType, setLoading, onClose, visible }) => {
  return (
    <Drawer
      title={drawerTitle}
      placement="left"
      closable={false}
      onClose={onClose}
      visible={visible}
      key="left"
    >
      {drawerType === "ntf" && <TrainingForm setLoading={setLoading} />}
      {drawerType === "nuf" && <UserForm setLoading={setLoading} />}
    </Drawer>
  );
};
