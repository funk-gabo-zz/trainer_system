import React, { useState, useEffect } from "react";
import axios from "axios";
import { BasicBar } from "../../components/BasicBar";
import { DonutPie } from "../../components/DonutPie";
import { Graphs } from "../../components/Graphs";
import { GraphItem, GraphItemGrid } from "../../components/Graphs/styles";
import { PointerCount } from "../../components/PointerCount";
import { Pointers } from "../../components/Pointers";
import { BoardDate, FilterSection, Main, Section } from "../pagesStyles";
import { Button, Input, Space, Form, DatePicker, Select } from "antd";
import { BasicTable } from "../../components/BasicTable";
import { FormDrawer } from "../../components/FormDrawer";
import "antd/dist/antd.css";

const { Search } = Input;
const { RangePicker } = DatePicker;

export const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [clientSearchValue, setClientSearchValue] = useState("");
  const [boardLoading, setBoardLoading] = useState(true);
  const [trainingsData, setTrainingsData] = useState([]);
  const [clientData, setClientData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState([]);
  const [visible, setVisible] = useState(false);

  const makeFilter = (dates) => {
    setPeriod(dates);
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (boardLoading)
      axios
        .get("https://calm-everglades-62292.herokuapp.com/training")
        .then((response) => {
          setTrainingsData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    axios
      .get("https://calm-everglades-62292.herokuapp.com/client")
      .then((response) => {
        setClientData(response.data);
        setBoardLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const thisDate = new Date();

  const dat = period.date || [thisDate, thisDate];
  const startDate = new Date(dat[0]);
  const endDate = new Date(dat[1]);

  let filteredTraining = [];

  const parseStart = startDate.toString();
  const parseEnd = endDate.toString();
  if (parseStart === parseEnd) {
    filteredTraining = trainingsData.filter((training) => {
      const date = new Date(training.date);
      return date.getMonth() === startDate.getMonth();
    });
  } else {
    filteredTraining = trainingsData.filter((training) => {
      const date = new Date(training.date);

      return date >= startDate && date <= endDate;
    });
  }

  const clientsTrained = [...new Set(filteredTraining.map((x) => x.client))]
    .length;
  const totalCleints = clientData.length;
  const countTotalTraining = filteredTraining.length;
  const executedTraining = filteredTraining.filter(
    (train) => train.status === "Realizado"
  ).length;
  const countDispatcher = filteredTraining.filter(
    (train) => train.platform === "Dispatcher"
  ).length;
  const countControl = filteredTraining.filter(
    (train) => train.platform === "Control"
  ).length;
  const countTelemetria = filteredTraining.filter(
    (train) => train.platform === "Telemetría"
  ).length;
  const countMobicua = filteredTraining.filter(
    (train) => train.platform === "Mobicua"
  ).length;
  const countCapacita = filteredTraining.filter(
    (train) => train.serviceType === "Capacitación"
  ).length;
  const countSoporte = filteredTraining.filter(
    (train) => train.serviceType === "Soporte de Plataformas"
  ).length;
  const countSeguimiento = filteredTraining.filter(
    (train) => train.serviceType === "Seguimiento"
  ).length;
  const countAcompañamiento = filteredTraining.filter(
    (train) => train.serviceType === "Acompañamiento"
  ).length;
  const countPresencial = filteredTraining.filter(
    (train) => train.mode === "Presencial"
  ).length;
  const countTelematica = filteredTraining.filter(
    (train) => train.mode === "Telemática"
  ).length;

  return (
    <Main>
      <Section>
        <BoardDate>
          <Form onFinish={makeFilter} layout="inline">
            <Form.Item name="date" noStyle>
              <RangePicker picker="month" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">🔍</Button>
            </Form.Item>
          </Form>
        </BoardDate>
        <Pointers>
          <PointerCount
            value={`${clientsTrained}/${totalCleints}`}
            title="Clientes Capacitdos"
          />
          <PointerCount
            value={`${executedTraining}/${countTotalTraining}`}
            title="Capacitaciones Realizadas"
          />
          <PointerCount value="0/0" title="Solicitudes Atendidas" />
        </Pointers>
      </Section>
      <Section>
        <Graphs>
          <GraphItem>
            <DonutPie
              countDispatcher={countDispatcher}
              countControl={countControl}
              countTelemetria={countTelemetria}
              countMobicua={countMobicua}
              donutType="pvt"
            />
          </GraphItem>
          <GraphItem>
            <DonutPie
              donutType="sts"
              countCapacita={countCapacita}
              countSoporte={countSoporte}
              countSeguimiento={countSeguimiento}
              countAcompañamiento={countAcompañamiento}
            />
          </GraphItem>
          <GraphItemGrid>
            <BasicBar
              countPresencial={countPresencial}
              countTelematica={countTelematica}
              BarType="tvp"
            />
          </GraphItemGrid>
        </Graphs>
      </Section>
      <Section>
        <FilterSection>
          <Search
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Busca un Usuario"
            style={{
              width: 200,
            }}
          />
          <Select
            allowClear
            showSearch
            placeholder="Buscar Cliente"
            optionFilterProp="children"
            onChange={(e) => {
              setClientSearchValue(e);
              console.log(clientSearchValue);
            }}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {clientData.map((client) => (
              <Select.Option key={client._id} value={client.name}>
                {client.name}
              </Select.Option>
            ))}
          </Select>
          <Button type="primary" onClick={showDrawer}>
            Nuevo Usuario
          </Button>
        </FilterSection>
        <BasicTable
          loading={loading}
          setLoading={setLoading}
          searchValue={searchValue}
          clientSearchValue={clientSearchValue}
          tableType="uft"
        />
      </Section>
      <FormDrawer
        drawerTitle="Nuevo Usuario"
        drawerType="nuf"
        visible={visible}
        setLoading={setLoading}
        onClose={onClose}
      />
    </Main>
  );
};
