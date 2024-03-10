import * as yup from "yup";

const leadSerializer = yup.object().shape({
  contato: yup.string().required().min(4).max(20),
  nome: yup.string().required().min(2).max(100),
  email: yup.string().max(100),
  envCliente: yup.boolean().required(),
});

export { leadSerializer };
