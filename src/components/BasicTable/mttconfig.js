import { trainings } from "../../../api/trainings";
import { useAxios } from "../../hooks/useAxios";

const { response, error, loading } = useAxios;

console.log(response);

export const mttcolumns = [
  {
    title: "Cliente",
    dataIndex: "cliente",
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
    title: "Presentes",
    dataIndex: "presentes",
  },
  {
    title: "Modalidad",
    dataIndex: "modalidad",
  },
  {
    title: "Tiempo",
    dataIndex: "tiempo",
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
  },
];
export const mttdata = trainings.map((training) => {
  return {
    key: training.id,
    cliente: training.client,
    fecha: training.date,
    plataforma: training.platform,
    tiempo: training.time,
    modalidad: training.mode,
    presentes: training.assistance,
    servicio: training.serviceType,
    mailContacto: training.contactEmail,
    nomContacto: training.contactName,
    telContacto: training.contactPhone,
    estado: training.status,
  };
});
