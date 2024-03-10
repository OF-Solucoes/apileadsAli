import * as yup from "yup";

const clienteSerializer = yup.object().shape({
  empresa: yup.string().required().min(2).max(60),
  cnpj: yup.number().required().min(2).max(15),
  ativo: yup.boolean().required(),
});

export { clienteSerializer };
