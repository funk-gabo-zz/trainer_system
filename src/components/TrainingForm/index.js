import React, { useRef, useState, useEffect } from "react";
import { Button, Form, Input, Select, DatePicker } from "antd";
import axios from "axios";

export const TrainingForm = ({ setLoading }) => {
  const [clientsData, setClientsData] = useState([]);
  const [modesData, setModesData] = useState([]);
  const [statusData, setStatusData] = useState([]);
  const [platformsData, setPlatformsData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  
  const formRef = useRef(null);
  const onFinish = (values) => {
    console.log("Success:", {
      ...values,
      observations: "N/A",
      time: 1,
      assistance: 1,
      tkt: "N/A",
    });
    const newTraining = {
      ...values,
      observations: "N/A",
      time: 1,
      assistance: 1,
      tkt: "N/A",
    };
    axios({
      method: "post",
      url: "http://localhost:3001/training",
      data: newTraining,
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
    axios
      .get("http://localhost:3001/platform")
      .then(function (response) {
        setPlatformsData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("http://localhost:3001/service")
      .then(function (response) {
        setServicesData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("http://localhost:3001/mode")
      .then(function (response) {
        setModesData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("http://localhost:3001/status")
      .then(function (response) {
        setStatusData(response.data);
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
          {clientsData.map((client) => (
            <Select.Option key={client._id} value={client.name}>
              {client.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="date"
        label="Fecha"
        rules={[
          {
            required: true,
            message: "Inserte Fecha",
          },
        ]}
      >
        <DatePicker placeholder="Fecha" />
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
          placeholder="Seleccione Plataforma"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {platformsData.map((platform) => (
            <Select.Option key={platform._id} value={platform.name}>
              {platform.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Servicio"
        name="serviceType"
        rules={[
          {
            required: true,
            message: "Seleccione Tipo Servicio",
          },
        ]}
      >
        <Select
          showSearch
          placeholder=" Seleccione Servicio"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {servicesData.map((service) => (
            <Select.Option key={service._id} value={service.service}>
              {service.service}
            </Select.Option>
          ))}
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
          {modesData.map((mode) => (
            <Select.Option key={mode._id} value={mode.mode}>
              {mode.mode}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Nom Contacto" name="contactName">
        <Input />
      </Form.Item>
      <Form.Item label="Email Contacto" name="contactEmail">
        <Input type="email" />
      </Form.Item>
      <Form.Item label="Cel Contacto" name="contactPhone">
        <Input />
      </Form.Item>
      <Form.Item
        label="Estado"
        name="status"
        rules={[
          {
            required: true,
            message: "Seleccione estado",
          },
        ]}
      >
        <Select
          showSearch
          placeholder="Seleccione Estado"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {statusData.map((status) => (
            <Select.Option key={status._id} value={status.status}>
              {status.status}
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
