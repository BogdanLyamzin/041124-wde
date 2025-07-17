import { Container } from "rsuite";
import { useForm } from "react-hook-form";
import { Input, Button, SelectPicker, Form } from "rsuite";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

const subjectList = [
  {
    value: "order-problem",
    label: "Problem with order",
  },
  {
    value: "product-question",
    label: "Question for product"
  },
  {
    label: "Other",
    value: "other",
  }
];

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
      <Form layout="vertical" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.ControlLabel>Name</Form.ControlLabel>
          <Input
            {...register("name", { required: "Name required" })}
            placeholder="Name"
          />
          <Form.ErrorMessage show={errors.name} placement="bottomStart">
            {errors.name?.message}
          </Form.ErrorMessage>
        </Form.Group>
        <Form.Group>
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Input
            {...register("email", { required: "email required" })}
            placeholder="email"
          />
          <Form.ErrorMessage show={!!errors.email} placement="bottomStart">
            {errors.email?.message}
          </Form.ErrorMessage>
        </Form.Group>
        <Form.Group>
          <SelectPicker
            {...register("name")}
            data={subjectList}
            searchable={false}
            placeholder="Select subject"
          />
        </Form.Group>
        <Form.Group>
          <Form.ControlLabel>Text</Form.ControlLabel>
          <Input
            as="textarea"
            {...register("text", { required: "Text required" })}
            placeholder="Text"
          />
          <Form.ErrorMessage show={!!errors.text} placement="bottomStart">
            {errors.text?.message}
          </Form.ErrorMessage>
        </Form.Group>
        <Button appearance="primary" type="submit">
          Send message
        </Button>
      </Form>
    </Container>
  );
};

export default Contacts;
