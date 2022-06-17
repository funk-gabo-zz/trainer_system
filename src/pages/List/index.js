import React, { useState } from "react";
import { BasicTable } from "../../components/BasicTable";
import { Main, Section } from "../pagesStyles";
import { Button, DatePicker, Space, Form } from "antd";
import { FormDrawer } from "../../components/FormDrawer";
const { RangePicker } = DatePicker;

export const List = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [period, setPeriod] = useState([])
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const makeFilter = (dates) => {
    setPeriod(dates)
  };
  return (
    <Main>
      <Section>
        <Space>
          <Button onClick={showDrawer} type="primary">
            Nueva Capacitación
          </Button>
          <Form onFinish={makeFilter} layout="inline">
            <Form.Item name="date" noStyle>
              <RangePicker picker="month" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">
                🔍
              </Button>
            </Form.Item>
          </Form>
        </Space>
        <FormDrawer
          drawerTitle="Nueva Capacitación"
          drawerType="ntf"
          visible={visible}
          setLoading={setLoading}
          onClose={onClose}
        />
        <BasicTable period={period} loading={loading} setLoading={setLoading} tableType="mtt" />
      </Section>
    </Main>
  );
};
