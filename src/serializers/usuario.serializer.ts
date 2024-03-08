import * as yup from "yup";

const createUsuarioSerializer = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().email().required(),
  senha: yup.string().required().min(8),
  id: yup.string().notRequired(),
});

const UsuarioSemSenhaSerializer = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().email().required(),
  id: yup.string().notRequired(),
});

export { createUsuarioSerializer, UsuarioSemSenhaSerializer };
