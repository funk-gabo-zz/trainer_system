import React from "react";
import { Table } from "antd";
import { uftcolumns } from "./uftconfig";
import { mttcolumns } from "./mttconfig";
import { useState, useEffect } from "react";
import axios from "axios";

export const BasicTable = ({ loading, setLoading, searchValue, tableType }) => {
  switch (tableType) {
    case "uft":
      const [userData, setUserData] = useState([]);
      useEffect(() => {
        if (loading) {
          axios
            .get("http://localhost:3001/user")
            .then(function (response) {
              setUserData(response.data);
              setLoading(false);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }, [loading]);
      const uftData = userData.map((user) => {
        return {
          key: user._id,
          name: user.name,
          email: user.email,
          phone: `(+56) ${user.phone}`,
          client: user.client,
        };
      });
      const uftdataFiltler = uftData.filter((data) => {
        const nameDataUpper = data.name.toUpperCase();
        const searchValueUpper = searchValue.toUpperCase();
        return nameDataUpper.includes(searchValueUpper);
      });
      return <Table loading={loading} columns={uftcolumns} dataSource={uftdataFiltler} size="small" />;
    case "mtt":
      const [trainingsData, setTrainingsData] = useState([]);
      useEffect(() => {
        if (loading) {
          axios
            .get("http://localhost:3001/training")
            .then(function (response) {
              setTrainingsData(response.data);
              setLoading(false);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }, [loading]);
      const mttdata = trainingsData.map((training) => {
        const dateMod = training.date.slice(-24, 10);
        return {
          key: training._id,
          cliente: training.client,
          fecha: dateMod,
          plataforma: training.platform,
          modalidad: training.mode,
          servicio: training.serviceType,
          mailContacto: training.contactEmail,
          nomContacto: training.contactName,
          telContacto: `(+56) ${training.contactPhone}`,
          estado: training.status,
          tkt: training.tkt,
          observaciones: training.observations,
        };
      });
      return (
        <Table
          columns={mttcolumns}
          loading={loading}
          dataSource={mttdata}
          size="small"
        />
      );

    default:
      break;
  }
};
