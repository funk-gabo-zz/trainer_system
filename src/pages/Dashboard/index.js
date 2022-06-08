import React, { useState, useEffect } from "react";
import { BasicBar } from "../../components/BasicBar";
import { DonutPie } from "../../components/DonutPie";
import { Graphs } from "../../components/Graphs";
import { GraphItem, GraphItemGrid } from "../../components/Graphs/styles";
import { PointerCount } from "../../components/PointerCount";
import { Pointers } from "../../components/Pointers";
import { Main, Section } from "../pagesStyles";
import "antd/dist/antd.css";
import { Button, Input, Space } from "antd";
import { BasicTable } from "../../components/BasicTable";
import axios from "axios";
import { FormDrawer } from "../../components/FormDrawer";
const { Search } = Input;

export const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [boardLoading, setBoardLoading] = useState(true);
  const [trainingData, setTrainingData] = useState([]);
  const [clientData, setClientData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [visible, setVisible] = useState(false);
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
          setTrainingData(response.data);
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
  const clientsTrained = [...new Set(trainingData.map((x) => x.client))].length;
  const totalCleints = clientData.length
  const countTotalTraining = trainingData.length
  const executedTraining = trainingData.filter(train => train.status === 'Realizado').length
  const countDispatcher = trainingData.filter(train=> train.platform === 'Dispatcher').length
  const countControl = trainingData.filter(train=> train.platform === 'Control').length
  const countTelemetria = trainingData.filter(train=> train.platform === 'Telemetría').length
  const countMobicua = trainingData.filter(train=> train.platform === 'Mobicua').length
  const countCapacita = trainingData.filter(train=> train.serviceType === 'Capacitación').length
  const countSoporte = trainingData.filter(train=> train.serviceType === 'Soporte de Plataformas').length
  const countSeguimiento = trainingData.filter(train=> train.serviceType === 'Seguimiento').length
  const countAcompañamiento = trainingData.filter(train=> train.serviceType === 'Acompañamiento').length
  const countPresencial = trainingData.filter(train=> train.mode === 'Presencial').length
  const countTelematica = trainingData.filter(train=> train.mode === 'Telemática').length

  return (
    <Main>
      <Section>
        <Pointers>
          <PointerCount value={`${clientsTrained}/${totalCleints}`} title="Clientes Capacitdos" />
          <PointerCount value={`${countTotalTraining}/${executedTraining}`} title="Capacitaciones Realizadas" />
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
            donutType="pvt" />
          </GraphItem>
          <GraphItem>
            <DonutPie donutType="sts"
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
            BarType="tvp" />
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
        <Button type="primary" onClick={showDrawer}>Nuevo Usuario</Button>
        </Space>
        <BasicTable loading={loading} setLoading={setLoading} searchValue={searchValue} tableType="uft" />
      </Section>
      <FormDrawer drawerTitle='Nuevo Usuario' drawerType='nuf' visible={visible} setLoading={setLoading} onClose={onClose} />
    </Main>
  );
};
