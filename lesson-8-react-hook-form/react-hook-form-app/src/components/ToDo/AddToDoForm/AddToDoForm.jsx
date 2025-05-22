import { useForm } from "react-hook-form";
// import useForm from "../../../shared/hooks/useForm";

import { defaultValues } from "./defaultValues";

const AddToDoForm = ({ submitForm }) => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    defaultValues,
  });
  // const {state, handleChange, handleSubmit} = useForm({initialState, submitForm});
  console.log(errors);
  const onSubmit = values => {
    submitForm(values);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="todo-name">Название дела:</label>
        <input
          {...register("name", {
            required: "У дела должно быть название"
          })}
          placeholder="Название дела"
          id="todo-name"
        />
      </div>
      {errors.name && <p style={{color: "red"}}>{errors.name.message}</p>}
      <div>
      <label htmlFor="todo-urgency">Срочность дела:</label>
        <input
          type="checkbox"
          {...register("urgency")}
          id="todo-urgency"
        />
      </div>
      <button type="submit">Добавить дело</button>
    </form>
  );
};

export default AddToDoForm;
