import { useId } from "react";
import { useForm } from "react-hook-form";

import styles from "./ToDoForm.module.css";

const ToDoForm = ({submitForm}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const textId = useId();

  const onSubmit = values => {
    submitForm(values);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.group}>
        <label htmlFor={textId} className={styles.label}>Text:</label>
        <input
          {...register("text", { required: "Text required" })}
          type="text"
          id={textId}
          placeholder="Text"
        />
        {errors.text && <p className={styles.error}>{errors.text.message}</p>}
      </div>
      <button>Add todo</button>
    </form>
  );
};

export default ToDoForm;
