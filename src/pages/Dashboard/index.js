import React from "react";
import { Graphs } from "../../components/Graphs";
import { PointerCount } from "../../components/PointerCount";
import { Pointers } from "../../components/Pointers";
import { Main } from "../pageStyles";

export const Dashboard = () => {
  return (
    <Main>
      <Pointers>
        <PointerCount value='24/30' title='Clientes Capacitdos' />
        <PointerCount value='44/41' title='Capacitaciones Realizadas'/>
        <PointerCount value='13/14' title='Solicitudes Atendidas'/>
      </Pointers>
      <Graphs />
    </Main>
  );
};
