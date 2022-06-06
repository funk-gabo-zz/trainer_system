import React from "react";
import { Drawer, Select, DatePicker } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

export const FormDrawer = ({ onClose, visible }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };
  return (
    <Drawer
      title="Nueva Capacitación"
      placement="left"
      closable={false}
      onClose={onClose}
      visible={visible}
      key="left"
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Cliente"
          name="client"
          rules={[
            {
              required: true,
              message: "Seleccione Cliente",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Seleccione Cliente"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="date"
          label="Fecha"
          rules={[
            {
              required: true,
              message: 'Inserte Fecha'
            },
          ]}
        >
          <DatePicker
            showTime={{
              format: "HH:mm",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Plataforma"
          name="platform"
          rules={[
            {
              required: true,
              message: "Seleccione Plataforma!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            <Option value="dispatcher">Dispatcher</Option>
            <Option value="control">Control</Option>
            <Option value="telemetría">Telemetría</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Servicio"
          name="service"
          rules={[
            {
              required: true,
              message: "Seleccione Tipo Servicio",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Tipo de Servicio"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            <Option value="capacitación">Capacitación</Option>
            <Option value="acompañamiento">Acompañamiento</Option>
            <Option value="soporte">Soporte Plataforma</Option>
            <Option value="seguimiento">Seguimiento</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Vía"
          name="mode"
          rules={[
            {
              required: true,
              message: "Seleccione vía",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Seleccione vía"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            <Option value="Telemática">Telemática</Option>
            <Option value="Presencial">Presencial</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Nom Contacto" name="contact">
          <Input />
        </Form.Item>
        <Form.Item label="Email Contacto" name="eContact">
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Cel Contacto"
          name="phone"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};
