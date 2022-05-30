import { trainings } from "../../../api/trainings";

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
    title: "Apellido Contacto",
    dataIndex: "apeContacto",
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
    presentes: training.assistance,
    modalidad: training.mode,
    tiempo: training.time,
    servicio: training.serviceType,
    nomContacto: training.contactName,
    apeContacto: training.contactLastName,
    mailContacto: training.contactEmail,
    telContacto: training.contactPhone,
    estado: training.status,
  };
});
