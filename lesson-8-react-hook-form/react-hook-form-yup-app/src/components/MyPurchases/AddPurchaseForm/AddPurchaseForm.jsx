import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "../../TextField/TextField";
import Checkbox from "../../Checkbox/Checkbox";
import Select from "../../Select/Select";

import { defaultValues, fields } from "./fields";
import purchaseSchema from "./purchaseSchema";

const AddPurchaseForm = ({ submitForm }) => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(purchaseSchema),
  });

  const onSubmit = (values) => {
    submitForm(values);
    reset();
  };

  const name = watch("name");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...fields.name} register={register} error={errors.name} />
      {name.length > 1 && (
        <TextField {...fields.count} register={register} error={errors.count} />
      )}
      <Checkbox {...fields.urgency} register={register} />
      <Select {...fields.category} register={register} />
      <button type="submit">
        Добавить
      </button>
    </form>
  );
};

export default AddPurchaseForm;
