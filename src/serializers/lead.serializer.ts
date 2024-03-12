import * as yup from "yup";

const leadSerializer = yup.object().shape({
  tel: yup.string().required().min(4).max(20),
  nome: yup.string().required().min(2).max(100),
  email: yup.string().required().max(100),
  envCliente: yup.boolean().required(),
  observ: yup.string().required().max(300),
});

export { leadSerializer };
