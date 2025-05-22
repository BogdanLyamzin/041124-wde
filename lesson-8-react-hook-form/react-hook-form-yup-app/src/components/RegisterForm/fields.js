import * as Yup from "yup";

export const defaultValues = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
};

export const fields = {
  username: {
    name: "username",
    label: "Username",
    placeholder: "Username",
  },
  email: {
    name: "email",
    label: "Email",
    placeholder: "Email",
  },
  password: {
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "Password",
  },
  repeatPassword: {
    type: "password",
    name: "repeatPassword",
    label: "Repeat password",
    placeholder: "Repeat password",
  },
};

const usernameRule = {
  regexp: /^[a-zA-Z0-9]+$/,
  message: "В username запрещены спецсимволы",
};

const passwordRule = {
    regexp: /^(?=.*[A-Za-z])(?=.*\d).+$/,
    message: "Пароль должен содержать минимум 1 цифру и букву"
}

export const registerSchema = Yup.object({
  username: Yup.string()
    .trim()
    .required()
    .matches(usernameRule.regexp, usernameRule.message),
  email: Yup.string().trim().required().email(),
  password: Yup.string()
    .trim()
    .required()
    .min(6, "пароль должен содержать минимум 6 символов")
    .matches(passwordRule.regexp, passwordRule.message)
    ,
    repeatPassword: Yup.string()
    .trim()
    .required()
    .min(6, "пароль должен содержать минимум 6 символов")
    .matches(passwordRule.regexp, passwordRule.message)
    .oneOf([Yup.ref("password")])
    ,
});
