import React from "react";
import { Table } from "antd";
import { uftcolumns, uftdata } from "./uftconfig";
import { mttcolumns } from "./mttconfig";
import { useState, useEffect } from "react";
import axios from "axios";

export const BasicTable = ({ loading, setLoading, searchValue, tableType }) => {
  switch (tableType) {
    case "uft":
    const [userData, setUserData] = useState([])
    useEffect(() => {
      if (loading) {
        axios
          .get("http://localhost:3001/user")
          .then(function (response) {
            setUserData(response.data);
            console.log(userData)
            setLoading(false);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }, [loading]);

      const uftdataFiltler = uftdata.filter((data) => {
        const nameDataUpper = data.nombre.toUpperCase();
        const searchValueUpper = searchValue.toUpperCase();
        return nameDataUpper.includes(searchValueUpper);
      });
      return (
        <Table columns={uftcolumns} dataSource={userData} size="small" />
      );
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
          tiempo: training.time,
          modalidad: training.mode,
          presentes: training.assistance,
          servicio: training.serviceType,
          mailContacto: training.contactEmail,
          nomContacto: training.contactName,
          telContacto: training.contactPhone,
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
