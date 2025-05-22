import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "../TextField/TextField";

import { defaultValues, fields, registerSchema } from "./fields";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(registerSchema)
  });

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        register={register}
        {...fields.username}
        error={errors.username}
      />
      <TextField register={register} {...fields.email} error={errors.email} />
      <TextField
        register={register}
        {...fields.password}
        error={errors.password}
      />
      <TextField
        register={register}
        {...fields.repeatPassword}
        error={errors.repeatPassword}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
