import React, { useEffect, useState } from "react";
import { Collapse } from "antd";
import axios from "axios";

const { Panel } = Collapse;
const text = `
  Componenet able to modificates
`;

export const Mnt = () => {
  const [clientData, setClientData] = useState([]);
  useEffect(()=> {
    axios
      .get("http://localhost:3001/client")
      .then((response) => {
        setClientData(response.data);
        setBoardLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  return (
    <Collapse accordion>
      <Panel header="MNT Clientes" key="1">
        {clientData.map(mexa => (
            <span key={mexa._id}>{mexa.name}</span>
        ))}
      </Panel>
      <Panel header="MNT Plataformas" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="MNT Kan" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};
