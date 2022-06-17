import React, { useState, useEffect } from "react";
import { BasicBar } from "../../components/BasicBar";
import { DonutPie } from "../../components/DonutPie";
import { Graphs } from "../../components/Graphs";
import { GraphItem, GraphItemGrid } from "../../components/Graphs/styles";
import { PointerCount } from "../../components/PointerCount";
import { Pointers } from "../../components/Pointers";
import { Main, Section } from "../pagesStyles";
import "antd/dist/antd.css";
import { Button, Input, Space, Form, DatePicker } from "antd";
import { BasicTable } from "../../components/BasicTable";
import axios from "axios";
import { FormDrawer } from "../../components/FormDrawer";
const { Search } = Input;
const { RangePicker } = DatePicker;

export const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");
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
        .get("http://localhost:3001/training")
        .then((response) => {
          setTrainingsData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    axios
      .get("http://localhost:3001/client")
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

  const clientsTrained = [...new Set(filteredTraining.map((x) => x.client))].length;
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
        <Form onFinish={makeFilter} layout="inline">
          <Form.Item name="date" noStyle>
            <RangePicker picker="month"/>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">🔍</Button>
          </Form.Item>
        </Form>
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
        <Space>
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
          <Button type="primary" onClick={showDrawer}>
            Nuevo Usuario
          </Button>
        </Space>
        <BasicTable
          loading={loading}
          setLoading={setLoading}
          searchValue={searchValue}
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
