import React from "react";
import { BasicBar } from "../../components/BasicBar";
import { DonutPie } from "../../components/DonutPie";
import { Graphs } from "../../components/Graphs";
import { GraphItem, GraphItemGrid } from "../../components/Graphs/styles";
import { PointerCount } from "../../components/PointerCount";
import { Pointers } from "../../components/Pointers";
import { Main, Section } from "../pagesStyles";
import 'antd/dist/antd.css';
import { Input } from 'antd';

export const Dashboard = () => {
  return (
    <Main>
      <Section>
        <Pointers>
          <PointerCount value='24/30' title='Clientes Capacitdos' />
          <PointerCount value='44/41' title='Capacitaciones Realizadas' />
          <PointerCount value='13/14' title='Solicitudes Atendidas' />
        </Pointers>
      </Section>
      <Section>
        <Graphs>
          <GraphItem>
            <DonutPie donutType="pvt" />
          </GraphItem>
          <GraphItem>
            <DonutPie donutType="sts" />
          </GraphItem>
          <GraphItemGrid>
            <BasicBar BarType="tvp" />
          </GraphItemGrid>
        </Graphs>
      </Section>
      <Section>
      <Input />
      </Section>
    </Main>
  );
};
