import React, { useRef, useState, useEffect } from "react";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";

export const UserForm = ({ setLoading }) => {
  const [clientsData, setClientsData] = useState([]);
  const formRef = useRef(null);

  const onFinish = (values) => {
    axios({
      method: "post",
      url: "http://localhost:3001/user",
      data: values,
    });
    setLoading(true);
    formRef.current.resetFields();
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
  useEffect(() => {
    axios
      .get("http://localhost:3001/client")
      .then(function (response) {
        setClientsData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
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
      ref={formRef}
    >
      <Form.Item
        label="Nombre"
        placeholder="Nombre"
        rules={[
          {
            required: true,
            message: "Escriba Nombre de Usuario",
          },
        ]}
        name="name"
      >
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email" placeholder="Email">
        <Input />
      </Form.Item>
      <Form.Item label="Teléfono" name="phone" placeholder="Teléfono">
        <Input />
      </Form.Item>
      <Form.Item
        label="Empresa"
        name="client"
        rules={[
          {
            required: true,
            message: "Seleccione Empresa",
          },
        ]}
      >
        <Select
          showSearch
          placeholder="Seleccione Empresa"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {clientsData.map((client) => (
            <Select.Option key={client._id} value={client.name}>
              {client.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
