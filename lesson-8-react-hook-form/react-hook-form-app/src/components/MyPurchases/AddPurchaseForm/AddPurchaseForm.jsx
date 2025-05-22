import { useForm } from "react-hook-form";

import TextField from "../../TextField/TextField";
import Checkbox from "../../Checkbox/Checkbox";
import Select from "../../Select/Select";

import { defaultValues, fields } from "./fields";

const AddPurchaseForm = ({ submitForm }) => {
  const {register, watch, handleSubmit, reset, formState: {isSubmitting, isValid, errors}} = useForm({
    defaultValues,
    // mode: "onBlur"
  });

  const onSubmit = values => {
    submitForm(values);
    reset();
  }

  const name = watch("name");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...fields.name} register={register} error={errors.name} />
      {name.length > 1 && <TextField {...fields.count} register={register} error={errors.count} />}
      <Checkbox {...fields.urgency} register={register} />
      <Select {...fields.category} register={register} />
      <button disabled={!isValid} type="submit">{isSubmitting ? "Добавляем" : "Добавить"}</button>
    </form>
  );
};

export default AddPurchaseForm;
