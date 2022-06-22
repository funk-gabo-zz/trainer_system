import React from "react";
import { Table, Tag } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

export const BasicTable = ({
  period,
  loading,
  setLoading,
  searchValue,
  clientSearchValue,
  tableType,
}) => {
  switch (tableType) {
    case "uft":
      const [userData, setUserData] = useState([]);
      const uftcolumns = [
        {
          title: "Nombre",
          dataIndex: "name",
          fixed: "left",
        },
        {
          title: "Email",
          dataIndex: "email",
        },
        {
          title: "Telefono",
          dataIndex: "phone",
        },
        {
          title: "Empresa",
          dataIndex: "client",
        },
      ];
      useEffect(() => {
        if (loading) {
          axios
            .get("https://calm-everglades-62292.herokuapp.com/user")
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
      let clientUserFilter = []
      if (clientSearchValue) {
        clientUserFilter = uftdataFiltler.filter((data) => {
          return data.client === clientSearchValue;
        });
      } else {
        clientUserFilter = uftdataFiltler
      }
      return (
        <Table
          scroll={{
            x: 420,
          }}
          loading={loading}
          columns={uftcolumns}
          dataSource={clientUserFilter}
          size="small"
        />
      );
    case "mtt":
      const [trainingsData, setTrainingsData] = useState([]);
      const updateState = (id, state) => {
        console.log(id);
        const newStatus = state === "Realizado" ? "Pendiente" : "Realizado";
        axios
          .patch(`https://calm-everglades-62292.herokuapp.com/training/${id}`, {
            id,
            status: newStatus,
          })
          .then(() => setLoading(true));
      };
      const mttcolumns = [
        {
          title: "Cliente",
          dataIndex: "cliente",
          fixed: "left",
        },
        {
          title: "Fecha",
          dataIndex: "fecha",
        },
        {
          title: "Plataforma",
          dataIndex: "plataforma",
        },
        {
          title: "Modalidad",
          dataIndex: "modalidad",
        },
        {
          title: "Servicio",
          dataIndex: "servicio",
        },
        {
          title: "Nombre Contacto",
          dataIndex: "nomContacto",
        },
        {
          title: "Email Contacto",
          dataIndex: "mailContacto",
        },
        {
          title: "Teléfono Contacto",
          dataIndex: "telContacto",
        },
        {
          title: "Estado",
          dataIndex: "estado",
          render: (tags) => {
            let color = tags[0] === "Realizado" ? "green" : "volcano";

            return (
              <Tag onClick={() => updateState(tags[1], tags[0])} color={color}>
                {tags[0].toUpperCase()}
              </Tag>
            );
          },
        },
      ];

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

      const mttdata = filteredTraining.map((training) => {
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
          estado: [training.status, training._id],
          tkt: training.tkt,
          observaciones: training.observations,
        };
      });
      useEffect(() => {
        if (loading) {
          axios
            .get("https://calm-everglades-62292.herokuapp.com/training")
            .then(function (response) {
              setTrainingsData(response.data);
              setLoading(false);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }, [loading]);

      return (
        <Table
          columns={mttcolumns}
          loading={loading}
          dataSource={mttdata}
          size="small"
          scroll={{
            x: 1300,
          }}
        />
      );

    default:
      break;
  }
};
