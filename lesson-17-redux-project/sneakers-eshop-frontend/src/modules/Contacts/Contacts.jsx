import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Container from "@mui/material/Container";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };
  
  return (
    <Container>
      <SectionTitle>Контакты</SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("name", { required: "Name required" })}
          error={errors.name}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          helperText={errors.name?.message}
        />
        <Button  variant="contained" type="submit">Send message</Button>
      </form>
    </Container>
  );
};

export default Contacts;
