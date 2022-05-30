import { users } from "../../../api/users";
export const uftcolumns = [
  {
    title: "Nombre",
    dataIndex: "nombre",
  },
  {
    title: "Apellido",
    dataIndex: "apellido",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Telefono",
    dataIndex: "telefono",
  },
  {
    title: "Empresa",
    dataIndex: "empresa",
  },
];
export const uftdata = users.map((user) => {
  return {
    key: user.id,
    nombre: user.name,
    apellido: user.lastName,
    email: user.email,
    telefono: `(+56) 9 ${user.phone}`,
    empresa: user.client
  };
});
