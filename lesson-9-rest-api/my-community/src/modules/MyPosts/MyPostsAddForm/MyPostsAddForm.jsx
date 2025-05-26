import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../../shared/components/Button/Button";

import styles from "./MyPostsAddForm.module.css";

import { defaultValues, fields, postSchema } from "./fields";

const MyPostsAddForm = ({ submitForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(postSchema),
  });

  const onSubmit = (values) => {
    submitForm(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        {...register("title")}
        {...fields.title}
        className={styles.field}
      />
      {errors.title && <p className={styles.error}>{errors.title.message}</p>}
      <textarea
        {...register("text")}
        {...fields.text}
        className={styles.field}
      ></textarea>
      {errors.text && <p className={styles.error}>{errors.text.message}</p>}
      <Button type="submit">Публикация</Button>
    </form>
  );
};

export default MyPostsAddForm;
