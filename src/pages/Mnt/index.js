import React, { useEffect, useState } from "react";
import { Button, Collapse, Form, Input } from "antd";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import {
  DeleteIcon,
  PanelCard,
  PanelContainer,
  PanelForm,
  PanelItem,
} from "../pagesStyles";

const { Panel } = Collapse;
const text = `
  Componenet able to modificates
`;

export const Mnt = () => {
  const [clientData, setClientData] = useState([]);
  const [clientLoading, setClientLoading] = useState(true);
  const [platformData, setPlatformData] = useState([]);
  const [platformLoading, setPlatformLoading] = useState(true);
  useEffect(() => {
    if (clientLoading) {
      axios
        .get("https://calm-everglades-62292.herokuapp.com/client")
        .then((response) => {
          setClientData(response.data);
          setClientLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  useEffect(() => {
    if (platformLoading) {
      axios
        .get("https://calm-everglades-62292.herokuapp.com/platform")
        .then((response) => {
          setPlatformData(response.data);
          setPlatformLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  return (
    <Collapse accordion>
      <Panel header="MNT Clientes" key="1">
        <PanelContainer>
          <PanelForm>
            <Form layout="horizontal">
              <Form.Item label="Cliente">
                <Input placeholder="Nuevo Cliente" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Agregar
                </Button>
              </Form.Item>
            </Form>
          </PanelForm>
          <PanelItem>
            {clientLoading ? (
              <h2>Cargando...</h2>
            ) : (
              clientData.map((client) => (
                <PanelCard key={client._id}>
                  <span>{client.name}</span>
                  <DeleteIcon>
                    <FaTrashAlt />
                  </DeleteIcon>
                </PanelCard>
              ))
            )}
          </PanelItem>
        </PanelContainer>
      </Panel>
      <Panel header="MNT Plataformas" key="2">
        <PanelContainer>
          <PanelForm>
            <Form layout="horizontal">
              <Form.Item label="Plataforma">
                <Input placeholder="Nuevo Plataforma" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Agregar
                </Button>
              </Form.Item>
            </Form>
          </PanelForm>
          <PanelItem>
            {platformLoading ? (
              <h2>Cargando...</h2>
            ) : (
              platformData.map((platform) => (
                <PanelCard key={platform._id}>
                  <span>{platform.name}</span>
                  <DeleteIcon>
                    <FaTrashAlt />
                  </DeleteIcon>
                </PanelCard>
              ))
            )}
          </PanelItem>
        </PanelContainer>
      </Panel>
      <Panel header="MNT Kan" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};
