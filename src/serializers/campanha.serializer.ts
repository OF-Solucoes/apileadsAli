import * as yup from "yup";

const campanhaSerializer = yup.object().shape({
  descricao: yup.string().required().min(2).max(60),
  observ: yup.string().required().min(2).max(300),
  ativa: yup.boolean().required(),
});

export { campanhaSerializer };
