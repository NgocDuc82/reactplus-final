import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
  email: yup
    .string()
    .required()
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/),
});
