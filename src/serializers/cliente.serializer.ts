import * as yup from "yup";

const clienteSerializer = yup.object().shape({
  empresa: yup.string().required().min(2).max(60),
  cnpj: yup.string().required().min(2).max(20),
  ativo: yup.boolean().required(),
});

export { clienteSerializer };
