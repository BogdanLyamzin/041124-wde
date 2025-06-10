import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../../shared/components/Button/Button";

import styles from "./MyCommunitiesAddForm.module.css";

import { defaultValues, fields, communitySchema } from "./fields";

const MyCommunitiesAddForm = ({ submitForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(communitySchema),
  });

  useEffect(()=> {
    setFocus("name");
  }, [setFocus]);

  const onSubmit = (values) => {
    submitForm(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        {...register("name")}
        {...fields.name}
        className={styles.field}
      />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      <input
        {...register("url")}
        {...fields.url}
        className={styles.field}
      />
      {errors.url && <p className={styles.error}>{errors.url.message}</p>}    
      <div>
        <label>Favorite</label>
        <input
        {...register("favorite")}
        {...fields.favorite}
        
      />
      </div>
      <Button type="submit">Добавить канал</Button>
    </form>
  );
};

export default MyCommunitiesAddForm;
